#!/bin/bash
set -e
DOCKER_IMAGE=wizulus/pubsub
docker build -t $DOCKER_IMAGE .
docker push $DOCKER_IMAGE
npm publish
