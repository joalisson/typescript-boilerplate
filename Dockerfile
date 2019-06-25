FROM node:10-alpine

WORKDIR /usr/src/app

ADD . /usr/src/app

COPY package.json /usr/src/app

RUN npm install -g tsc
RUN npm install -g typescript 
RUN npm install

COPY . /usr/src/app

EXPOSE 3001

CMD [ "npm", "start" ]