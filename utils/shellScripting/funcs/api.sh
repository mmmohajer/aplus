addDjangoApp() {
    local appName=$(readData "What is the app name?")

    local appFolder="api/$appName"
    mkdir -p "$appFolder"

    local adminFolder="$appFolder/admin"
    mkdir -p "$adminFolder"

    local migrationsFolder="$appFolder/migrations"
    mkdir -p "$migrationsFolder"

    local modelsFolder="$appFolder/models"
    mkdir -p "$modelsFolder"

    local serializersFolder="$appFolder/serializers"
    mkdir -p "$serializersFolder"

    local viewsFolder="$appFolder/views"
    mkdir -p "$viewsFolder"

    touch "$appFolder/__init__.py"
    
    local appsContext=$(getAppsContext $appName)
    echo "$appsContext" >> "$appFolder/apps.py"
    
    local urlsContext=$(getUrlsContext)
    echo "$urlsContext" >> "$appFolder/urls.py"

    echo "from django.contrib import admin" >> "$adminFolder/__init__.py"
    touch "$migrationsFolder/__init__.py"
    touch "$modelsFolder/__init__.py"
    touch "$serializersFolder/__init__.py"
    touch "$viewsFolder/__init__.py"

    echo -en "${I_YELLOW}"
    echo -e "Do not forget to add ${I_GREEN}$appName${I_YELLOW} to the list of INSTALLED_APPS in config.settings folder"
    echo -en "${DEFAULT_COLOR}"
    
}