initialSetupInMAcOrLinux() {
    python3 -m venv venv
    source venv/bin/activate
    pip install --upgrade pip
    pip install -r api/requirements.txt
    pip install pytest pytest-django model_bakery pytest-watch isort flake8 autopep8 locust
    echo "Python virtual environment is ready"
    cp ".env.sample" ".env"
    cp "config/envFiles/django/develop/.env.sample" "config/envFiles/django/develop/.env"
    cp "config/envFiles/django/prod/.env.sample" "config/envFiles/django/prod/.env"
    cp "config/envFiles/postgres/develop/.env.sample" "config/envFiles/postgres/develop/.env"
    cp "config/envFiles/postgres/prod/.env.sample" "config/envFiles/postgres/prod/.env"
    cp "client/next.config.sample.js" "client/next.config.js"
    cp "api/.env.sample" "api/.env"
    echo "All environment variables have been copied"
    mkdir -p "api/vol/media"
    mkdir -p "api/vol/static"
    echo "vol folder created inside api folder"
    cd api && python manage.py collectstatic && cd ..
    echo "Static files created"
    cd client && npm install && cd ..
    echo "Client folder is ready"
}

initialSetupInWindows() {
    cp ".env.sample" ".env"
    cp "config/envFiles/django/develop/.env.sample" "config/envFiles/django/develop/.env"
    cp "config/envFiles/django/prod/.env.sample" "config/envFiles/django/prod/.env"
    cp "config/envFiles/postgres/develop/.env.sample" "config/envFiles/postgres/develop/.env"
    cp "config/envFiles/postgres/prod/.env.sample" "config/envFiles/postgres/prod/.env"
    cp "client/next.config.sample.js" "client/next.config.js"
    cp "api/.env.sample" "api/.env"
    echo "All environment variables have been copied" 
}

initialSetupInServer() {
    cp ".env.sample" ".env"
    cp "config/envFiles/django/prod/.env.sample" "config/envFiles/django/prod/.env"
    cp "config/envFiles/postgres/prod/.env.sample" "config/envFiles/postgres/prod/.env"
    cp "client/next.config.sample.js" "client/next.config.js"
    echo "All environment variables have been copied"
}