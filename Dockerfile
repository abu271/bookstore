FROM node:18-alpine3.17 AS build
WORKDIR /app
COPY ./ /app

RUN npm install
RUN npm run build


FROM node:lts-alpine
COPY ./package*.json ./
COPY --from=build /app/dist dist

RUN npm install -g http-server

EXPOSE 3004
CMD [ "npm", "start" ]