#!/bin/sh

docker container rm -f $(docker container ls -a -q)
docker image rm -f $(docker image ls -a -q)
docker-compose -f /var/www/app/docker-compose-prod-ssl.yml down
docker-compose -f /var/www/app/docker-compose-prod-ssl.yml up --build -d && docker volume prune -f