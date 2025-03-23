FROM node:lts-alpine
WORKDIR /app

COPY . .

# Create user
RUN adduser -D user
RUN chown user:user -R /app/
USER user

# Bypass EACCES error in Github actions
RUN npm install esbuild --ignore-scripts

RUN npm install
RUN npm run build

RUN npm install -g http-server

EXPOSE 3004
CMD [ "npm", "start" ]