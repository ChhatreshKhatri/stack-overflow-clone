FROM alpine
RUN apk update
RUN apk add nodejs
RUN apk add npm
RUN mkdir /app
WORKDIR /app
COPY * /app
RUN npm install
EXPOSE 5000
CMD npm start