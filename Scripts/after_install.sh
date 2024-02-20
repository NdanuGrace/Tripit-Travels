#!/bin/bash

sudo chown -R ubuntu:ubuntu /home/ubuntu
cd /home/ubuntu/thing-microservice
# sudo docker-compose stop
# sudo docker-compose rm -f
# node dist/main
# sudo docker stop thing-microservice
# sudo docker rm thing-microservice
# sudo docker rmi $(docker images -q)
sudo docker pull ghcr.io/ovesorg/thing-microservice:prod
export DOCKER_CLIENT_TIMEOUT=300
export COMPOSE_HTTP_TIMEOUT=300    
sudo docker-compose -f docker-compose.yml up -d --build