#!/bin/sh

echo "Waiting for database to start"
./wait-for db:5432

"Collect static files"
python manage.py collectstatic --noinput

echo "Migrating database"
python manage.py migrate

echo "Running application"
uwsgi --socket :8000 --workers 4 --master --enable-threads --module config.wsgi