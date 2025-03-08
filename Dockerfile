FROM node:lts-alpine
WORKDIR /app

COPY . .
# Bypass EACCES error in Github actions
RUN npm install esbuild --ignore-scripts

RUN npm install
RUN npm run build

RUN npm install -g http-server

EXPOSE 3004
CMD [ "npm", "start" ]