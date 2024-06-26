FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]