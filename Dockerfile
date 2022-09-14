FROM node:lts-alpine3.14
COPY /frontend/package.json /app/package.json
WORKDIR /app
RUN npm install --silent
CMD npm start