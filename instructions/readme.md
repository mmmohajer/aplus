Initial Server Hardening: <br>
Login to the server with `root` user <br>
`ssh root@IP_ADDRESS` <br>
**Change root user password** <br>
`passwd` <br>
**Add a new user** <br>
`adduser USER_NAME` <br>
**Add `root` user priviledges to the new nonroot user** <br>

1. `visudo` --> To open the editable file <br>
2. Add `USER_NAME ALL=(ALL:ALL) ALL` --> under root user oriviledges <br>
   **Prevent `root` user login** <br>
3. `cd /etc/ssh/` <br>
4. `cp sshd_config sshd_config.bak` --> Create a backup file <br>
5. `nano sshd_config` <br>
6. Change `PermitRootLogin no` --> Initially it is set to yes <br>
7. Exit the file (ctrl + x) and then `systemctl restart ssh` <br>
   **Login as nonroot user**
   `ssh USERNAME@IP_ADDRESS` <br>

<hr>

Currently that non-root user login works good, we can setup public/private key
authentication to the system instead of password login. <br>

So, in your local system <br>

1. `ssh-keygen -t rsa -b 4096 -C "Comment for the file"` --> In order to create public and private keys <br>
2. Copy the public key file to your server:
   scp `.ssh/PUB_SSH_KEY_NAME.pub USER_NAME@IP_ADDRESS:/home/USER_NAME`
3. Login to the server with the usename credentials: <br>
   Inside the server: `mv PUB_SSH_KEY_NAME.pub authorized_keys` --> change the name of the pub key file in the server to authorized_keys
4. `mkdir .ssh` --> Create .ssh folder under user directory <br>
   `mv authorized_keys .ssh/` --> Move the authorized_keys file to .ssh folder <br>
5. `chmod 600 authorized_keys` --> Change the of authorized_keys file, so only user can read/write that <br>
6. `sudo chattr +i authorized_keys` --> Prevent authorized_keys deletion <br>
7. `chmod 700 .ssh/` --> Change mode of .ssh folder, so only user can read, wite, and execute the .ssh folfer <br>
8. `cd /etc/ssh` <br>
9. `sudo nano sshd_config` --> Open sshd_condig file and make the following changes: <br>
   `PubkeyAuthentication yes` <br>
   `AuthorizedKeysFile %h/.ssh/authorized_keys .ssh/authorized_keys2` <br>
   `PasswordAuthentication no` <br>

10. `sudo systemctl restart ssh

11. So, you can test login to the server using ssh keys as follows: <br>
    `ssh -i .ssh/PRIVATE_SSH_KEY_NAME USERNAME@IP_ADDRESS`

<hr>

Create an alias in your local system for simpler anfd more optimized login to the server, So in your local machine: <br>
`nano .ssh/config` --> Open config file and set relevant configuration, like: <br>
`Host iswad_website` <br>
`Hostname 155.138.151.125` <br>
`User mmmohajer70` <br>
`IdentityFile /Users/mohammadmohajer/Desktop/SoftwareDevelopment/ISWADdockerizedReactDjango/.ssh/iswad_web_rsa` <br>
`ServerAliveInterval 60` <br>
`ServerAliveCountMax 120` <br>

Then, you can simply login with the following command: <br>
`ssh alias to login`

<hr>

**Perform updating and upgrading in your server** <br>
`sudo apt update` <br>
`sudo apt upgrade` <br>
`sudo apt autoremove` <br>

**Add firewall rules to the server** <br>
`sudo apt install ufw` --> Installs firewall <br>
`sudo ufw status verbose` --> Check current firewall rules <br>
`sudo ufw default deny incoming` --> Deny all incoming requests<br>
`sudo ufw default allow outgoing` --> Accept all outgoing requests <br>
`sudo ufw allow ssh` --> Open ssh port or `sudp ufw allow 22` <br>
`sudo ufw allow http` --> Open http port or `sudp ufw allow 80` <br>
`sudo ufw allow https` --> Open https port or `sudp ufw allow 443` <br>
For our app: <br>
`sudo ufw allow 5555` --> Celery flower port <br>
`sudo ufw allow 5432` --> DB port<br>
`sudo ufw enable` --> Enable all firewall rules <br>
`sudo reboot` --> Reboot the server <br>

<hr>

**Install fail2ban** <br>
`sudo apt update` <br>
`sudo apt install fail2ban` <br>
`cd /etc/fail2ban` <br>
`sudo cp jail.conf jail.local` <br>
`sudo nano jail.local` <br>
Make the following changes: <br>
`bantime = 604800s` <br>
`findtime = 10800s` <br>
`maxretry = 2` <br>
AND <br>
`mode = aggressive` <br>
`port = ssh` <br>
`logpath = %(sshd_log)s` <br>
`backend = %(sshd_backend)s` <br>
`enabled = true` <br>

`sudo systemctl restart fail2ban` <br>

To see logs of fail2ban: <br>
`cd /var/log` <br>
`sudo cat fail2ban.log` <br>

If for any reason your lical IP address is banned in your server, you need to use browser console of your server and type the following: <br>
`fail2ban-client set sshd unbanip IP_ADDRESS` <br>

**Install docker on your server** <br>
Instructions here: https://docs.docker.com/engine/install/ubuntu/ <br>

**Install docker-compose in the server** <br>
Instructions here: https://docs.docker.com/compose/install/

**Add your username to the docker group** <br>
So, you can run docker commands without the need of sudo <br>
`sudo groupadd docker` <br>
`sudo usermod -aG docker $USER_NAME` <br>
`newgrp docker` <br>
`docker run hello-world` --> check if it works <br>

**Set git config**
`sudo git config --global user.email "OWNER_OF_GITHUB_REPO_EMAIL"` <br>
`git config --global user.email "OWNER_OF_GITHUB_REPO_EMAIL"` <br>

**Clone the repo to server**
`cd /var` <br>
`mkdir www` <br>
`cd www` <br>
`mkdir app` <br>
`cd app` <br>
`git clone REPO_URL` <br>

**Run Application**
Create the following subfolders: <br>
`./api/vol/static/` <br>
`./api/vol/media/` <br>
for all .env.sample files `cp .env.sample .env` <br>
Run `nano .env` --> change .env variables <br>
Then you need to add ssl config to your domain, so take the following steps: <br>

Create following subfolders: <br>
`./nginx/certbot/conf/` <br>
`./nginx/certbot/www/` <br>
`docker-compose -f docker-compose-createSSl.yml up --build -d` <br>
Add A records to the DNS settings of relevant domain pointing to the server IP address. <br>
**Note: www also must be referring to the server ip address** <br>
And then change domains and email in `init-letsencrypt.sh` <br>
Then run `./init-letsencrypt.sh` <br>

Now your app is ready to be run on server:
To do so, first clear all volumes, images, and containersof docker, useing the following 3 commands: <br>
Run `docker container rm -f $(docker container ls -a -q)` <br>
Run `docker image rm -f $(docker image ls -a -q)` <br>
Run `docker volume prune` <br>
Now everything is ready for your app to be served: <br>
Run `docker-compose -f docker-compose-prod-ssl.yml up --build -d`
