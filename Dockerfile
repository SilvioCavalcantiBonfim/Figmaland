FROM node:20-alpine AS build

WORKDIR /home/node/app

RUN npm cache clean --force

COPY --chown=node:node package*.json ./

COPY --chown=node:node . .

RUN npm install

RUN npm run build

FROM nginx:1.25.1-alpine-slim AS ngi

COPY --from=build /home/node/app/dist /usr/share/nginx/html

COPY /nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 3000