Create the following subfolders: <br>
`./api/vol/static/` <br>
`./api/vol/media/`

<hr>

**Setup**:

1. Setup Development environment: <br>
   Create the following subfolders: <br>
   `./api/vol/static/` <br>
   `./api/vol/media/` <br>
   Run `python manage.py collectstatic` <br>
   Run `docker-compose -f docker-compose-dev.yml up --build -d` <br>

<hr>

2. Test production environment on your local PC: <br>
   Run `docker-compose -f docker-compose-prod.yml up -build -d` <hr>

3. Setup Production environment: <br>
   Create the following subfolders: <br>
   `./api/vol/static/` <br>
   `./api/vol/media/` <br>
   Run `cp .env.sample .env` <br>
   Run `nano .env` --> change .env variables <br>
   Add ssl config to your domain: <br>
   Create following subfolders: <br>
   `./nginx/certbot/conf/` <br>
   `./nginx/certbot/www/` <br>
   `docker-compose -f docker-compose-createSSl.yml up --build -d` <br>
   And then change domains and email in `init-letsencrypt.sh` <br>
   Then run `./init-letsencrypt.sh` <br>
   Now your app is ready to be run on server:
   To do so, first clear all volumes, images, and containersof docker, useing the following 3 commands:
   Run `docker container rm -f $(docker container ls -a -q)` <br>
   Run `docker image rm -f $(docker image ls -a -q)` <br>
   Run `docker volume prune` <br>
   Now everything is ready for your app to be served: <br>
   Run `docker-compose -f docker-compose-prod-ssl.yml up --build -d`
