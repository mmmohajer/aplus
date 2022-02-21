Inside api folder create the following subfolders:
vol/static/
vol/media/

Notes:
For development:
Run:
python manage.py collectstatic
docker-compose -f docker-compose-dev.yml up --build -d
For testing prod config on your local machine:
docker-compose -f docker-compose-prod.yml up -build -d
In prod env:
cp .env.sample .env --> Change the env variables
For ssl config:
docker-compose -f docker-compose-createSSl.yml up --build -d
And then change domains and email in init-letsencrypt.sh
Run:
./init-letsencrypt.sh
For running your app with ssl on server:
docker-compose -f docker-compose-prod-ssl.yml up --build -d

To clear all containers, images, and volumes:
docker container rm -f $(docker container ls -a -q)
docker image rm -f $(docker image ls -a -q)
docker volume prune
