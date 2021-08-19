
FROM node:14-alpine AS build-step

COPY package.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

RUN npm install && mkdir /app && cp -R ./node_modules ./app

WORKDIR /app

COPY ./ /app

RUN npm run build --prod

FROM nginx:latest

RUN chmod -R g+rwX /etc/nginx

COPY ./config/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-step /app/dist/clicke-pet-front /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]