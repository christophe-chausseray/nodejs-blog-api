FROM node:latest

RUN apt-get update && apt-get install -y \
    ocaml \
    libelf1 && \
    apt-get clean

ENV WORKDIR_APP=/var/www/nodejs-blog-api
WORKDIR $WORKDIR_APP

RUN npm install -g --silent --progress=false nodemon

COPY . $WORKDIR_APP

RUN yarn install
