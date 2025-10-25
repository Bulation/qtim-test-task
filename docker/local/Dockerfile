FROM node:22

ARG PORT
ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

RUN npm install -g pm2 cross-env

RUN touch /var/log/client.log

WORKDIR /var/www/client

EXPOSE ${PORT}

CMD tail -f /var/log/client.log