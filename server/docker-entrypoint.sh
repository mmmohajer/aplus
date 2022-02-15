#!/bin/sh

echo "Waiting for database to start"
./wait-for db:5432

echo "Migrating database"
python manage.py migrate

echo "Running application"
python manage.py runserver 0.0.0.0:8000