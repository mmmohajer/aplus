Some useful commands in Linux:
To change root user password:
ssh root@IP_ADDRESS
After logged in as a root user:
passwd
To add new user:
adduser USER_NAME
To add root priviledges to a nonroot user:
visudo
Add:
USER_NAME ALL=(ALL:ALL) ALL
Prevent root user login
/etc/ssh/sshd_config
cp sshd_config sshd_config.bak
nano sshd_config
PermitRootLogin no
systemctl restart ssh
Login as nonroot user:
ssh USERNAME@IP_ADDRESS
cd .ssh/known_hosts for fingerprints
ssh-keygen -t rsa -b 4096 -C "Comment for the file"
scp .ssh/PUB_SSH_KEY_NAME.pub USER_NAME@IP_ADDRESS:/home/USER_NAME
Inside the server: mv PUB_SSH_KEY_NAME.pub authorized_keys
mkdir .ssh
mv authorized_keys .ssh/
chmod 600 authorized_keys
sudo chattr +i authorized_keys
chmod 700 .ssh/
cd /etc/ssh --> sudo nano sshd_config
PubkeyAuthentication yes
AuthorizedKeysFile %h/.ssh/authorized_keys .ssh/authorized_keys2
PasswordAuthentication no

sudo systemctl restart ssh

ssh -i .ssh/PUB_SSH_KEY_NAME USERNAME@IP_ADDRESS

Creating a config file locally:
nano .ssh/config
ssh alias to login

sudo apt update
sudo apt upgrade
sudo apt autoremove
sudo apt install ufw
sudo ufw status verbose
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw enable
sudo reboot

sudo apt update
sudo apt install fail2ban
cd /etc/fail2ban
sudo cp jail.conf jail.local
sudo nano jail.local

bantime = 604800s
findtime = 10800s
maxretry = 2

mode = aggressive
port = ssh
logpath = %(sshd_log)s
backend = %(sshd_backend)s
enabled = true

sudo systemctl restart fail2ban
cd /var/log
sudo cat fail2ban.log

fail2ban-client set sshd unbanip IP_ADDRESS

sudo git config --global user.email "mmmohajer70@gmail.com"

sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
docker run hello-world
