FROM node:17.3.0-alpine3.14
LABEL Developer = "Moahammad Mahdi Mohajer"

WORKDIR /usr/src/app

RUN apk add --no-cache git

COPY ./package.json .
RUN npm install


COPY . .

RUN npm run build

EXPOSE 3000

RUN addgroup app && adduser -SG app app
RUN chown -R app:app .
USER app