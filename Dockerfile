FROM node:lts-alpine
WORKDIR /app

COPY package.json package-lock.json /
COPY . .

# Change ownership to the current user
RUN chown -R node:node /app /node_modules
RUN chmod -R 755 /app /node_modules
USER node

RUN npm install
RUN npm run build

COPY dist dist

USER root
RUN npm install -g http-server

EXPOSE 3004
CMD [ "npm", "start" ]