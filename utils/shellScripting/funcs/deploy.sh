deploy() {
local commitMsg=$(readData "What is your commit message to git?")
buildClient
git add .
git commit -m "$commitMsg"
git push origin master
local script=$( cat << EOF
cd /var/www/app;
git pull origin master;
docker container rm -f $(docker container ls -a -q)
docker image rm -f $(docker image ls -a -q)
docker-compose -f docker-compose-prod-ssl.yml down;
docker-compose -f docker-compose-prod-ssl.yml up --build -d;
EOF
)
ssh $SERVER_ALIAS "$script" 
}