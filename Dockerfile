FROM node:lts-alpine
WORKDIR /app

COPY package.json package-lock.json ./
COPY src/ vite.config.js index.html ./

RUN npm install
RUN npm run build

COPY dist dist

RUN npm install -g http-server

EXPOSE 3004
CMD [ "npm", "start" ]