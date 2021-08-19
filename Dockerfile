FROM node:14-alpine AS build-step

RUN mkdir -p /app && chown -R node:node /app

WORKDIR /app
COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

FROM nginx:latest

COPY --from=build-step /app/dist/clicke-pet-front /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf