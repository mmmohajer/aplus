deploy() {
local commitMsg=$(readData "What is your commit message to git?")
buildClient
git add .
git commit -m "$commitMsg"
git push origin master
local script=$( cat << EOF
cd /var/www/app;
git pull origin master;
docker-compose -f docker-compose-prod-ssl.yml down;
docker-compose -f docker-compose-prod-ssl.yml up --build -d;
docker container prune --force;
docker image prune -a --force;
EOF
)
ssh $SERVER_ALIAS "$script" 
}