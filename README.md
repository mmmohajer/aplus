**Setup**:

1. Setup Development environment: <br>
   Clone the repository <br>
   SETUP ON MAC/Linux:
   ./automation.sh
   Choose `Make initial setup on Mac/Linux`
   SETUP ON WINDOWS:
   Create a python virtual env: `python -m venv venv` <br>
   Activate virtual environment --> `venv\Scripts\activate` <br>
   `pip install --upgrade pip` <br>
   `pip install -r api/requirements-windows-local.txt` <br>
   Go to api folder and run `python manage.py collectstatic` <br>
   Go to client folder and run `npm run update-design` <br>
   Do the following part, in ordet to be able to use docker in your development environment:
   1. Go to the root folder and run `docker-compose -f docker-compose-dev.yml up --build -d` <br>

**Note** You might need to change the database name and database password in /api/config folder and env variables inside /config folder

<hr>

2. Test production environment on your local PC: <br>
   Run `docker-compose -f docker-compose-prod.yml up -build -d`

<hr>

3. Test performance of production environment on your local PC: <br>
   Run `docker-compose -f docker-compose-prod.yml up -build -d` <br>
   `cd api` <br>
   `locust -f locustfiles/browse_api.py`

<hr>

4. Setup Production environment: <br>
   Create the following subfolders: <br>
   `./api/vol/static/` <br>
   `./api/vol/media/` <br>
   Run `cp .env.sample .env` <br>
   Run `nano .env` --> change .env variables <br>
   Then you need to add ssl config to your domain, so take the following steps: <br>

   Create following subfolders: <br>
   `./nginx/certbot/conf/` <br>
   `./nginx/certbot/www/` <br>
   `docker-compose -f docker-compose-createSSl.yml up --build -d` <br>
   And then change domains and email in `init-letsencrypt.sh` <br>
   Then run `./init-letsencrypt.sh` <br>

   Now your app is ready to be run on server:
   To do so, first clear all volumes, images, and containersof docker, useing the following 3 commands: <br>
   Run `docker container rm -f $(docker container ls -a -q)` <br>
   Run `docker image rm -f $(docker image ls -a -q)` <br>
   Run `docker volume prune` <br>
   Now everything is ready for your app to be served: <br>
   Run `docker-compose -f docker-compose-prod-ssl.yml up --build -d`
