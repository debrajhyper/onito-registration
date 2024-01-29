FROM node:alpine3.19 as build
WORKDIR /onito-registration

COPY package*.json .
RUN npm install
COPY . .

RUN npm run build