#FROM node:14.4.0-alpine3.12 AS build
#
## Install
#WORKDIR /usr/src/app
#COPY package.json ./
#RUN npm install
#
## Build
#COPY tsconfig* ./
#COPY angular.json ./
#COPY src ./src
#RUN npm run build
#
## Image
#FROM nginx:1.19.0-alpine
#COPY docker/default.conf /etc/nginx/conf.d/
#COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html

FROM nginx:1.19.0-alpine
COPY /dist/frontend /usr/share/nginx/html
COPY docker/default.conf /etc/nginx/conf.d/ 