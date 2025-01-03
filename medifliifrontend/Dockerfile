FROM node:lts-bullseye AS built
WORKDIR /app
COPY package*.json /
RUN npm ci
COPY . .
RUN npm run build



# Etapa 2: Servir la aplicación
# FROM nginx:stable-alpine AS runtime
FROM nginx:stable-alpine
COPY ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=built /app/build /var/www/app/
EXPOSE 80
CMD ["nginx","-g", "daemon off;"]