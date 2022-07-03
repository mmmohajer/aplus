colouredGetInput() {
    # Ex: colouredGetInput $RED $IN_BLUE "Type something: " myvar
    local msgColor=$1
    local inputColor=$2
    local message=$3
    echo -en "$msgColor$message"
    read -p $'\e'"${inputColor}" $4
    echo -en "\033[0m"
    return 0
}

colouredPrint() {
    # Ex: colouredPrint $GREEN "Yayy!!"
    local color=$1
    local message=$2
    echo -e "${color}${message}\033[0m"
    return 0
}

drawSeparator() {
    # Ex: drawSeparator $PURPLE "*"
    local color=$1
    local shape=$2
    echo -en "$color"
    printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' "${shape}"
    echo -en "\033[0m"
}


getConfirmation() {
    # getConfirmation "Are you willing to continue? "

    local text=$1
    read -p "$text (Y/n) " isConfirmed
    isConfirmed=`echo $isConfirmed | tr '[a-z]' '[A-Z]'`
    [ ${#isConfirmed} -eq 0 ] && isConfirmed="Y"
    if [ $isConfirmed = "YES" ] || [ $isConfirmed = "Y" ]
    then
        return 0
    elif [ $isConfirmed = "N" ] || [ $isConfirmed = "NO" ]
    then
        return 1
    else
        getConfirmation "$text"
    fi
}

getPassword() {
    read -sp "Please enter the password " $1 && echo ""
    [ ${#password} -eq 0 ] && echo "Password must be at least 1 character length." && return 1
    read -sp "Repeat the same password again " $2 && echo ""
    [ $password != $repeatedPassword ] && echo "Passwords are not the same!" && return 2
    return 0
}

readData() {
    # readData "What is your name?"
    local text=$1
    local data
    read -p "$text " data
    [ ${#data} -eq 0 ] && readData "$text"
    echo $data
}

showMenuBar() {
drawSeparator $PURPLE "*"
echo -en "${I_GREEN}"
cat << EOF
1. Make initial setup on Mac/Linux.
2. Make initial setup on Windows.
3. Create a new react component.
4. Create a new react base component.
5. Create a new react page.
6. Create a new django app.
7. Copy environment variables in server
8. Deploy to server
$(echo -en "${I_CYAN}")0. Show MenuBar
$(echo -en "${I_RED}")Q. Exit
EOF
drawSeparator $PURPLE "*"
echo -en "${DEFAULT_COLOR}"
}