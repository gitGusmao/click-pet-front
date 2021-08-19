FROM node:14-alpine AS build-step

WORKDIR '/app'
COPY package.json /app

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:latest

COPY --from=build-step /app/dist/clicke-pet-front /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["npm", "run", "start"]

# EXPOSE 4200:80