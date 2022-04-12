deploy() {
local commitMsg=$(readData "What is your commit message to git?")
local sudoPassword=$(cat config/sudoPassword.txt)
buildClient
git add .
git commit -m "$commitMsg"
git push origin master
local script=$( cat << EOF
cd /var/www/app;
echo $sudoPassword | sudo -S git pull origin master;
echo $sudoPassword | sudo -S docker-compose -f docker-compose-prod-ssl.yml down;
echo $sudoPassword | sudo -S docker-compose -f docker-compose-prod-ssl.yml up --build -d;
echo $sudoPassword | sudo -S docker container prune --force;
docker image prune -a --force;
EOF
)
ssh $SERVER_ALIAS "$script" 
}