FROM node:11.1-alpine as develop-stage
WORKDIR /app
RUN npm install
ENTRYPOINT [ "npm", "run", "serve" ]