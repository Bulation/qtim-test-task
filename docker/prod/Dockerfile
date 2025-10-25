FROM node:22

ARG UID
ARG GID
ARG PORT
ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

RUN npm install -g pm2 cross-env

RUN touch /var/log/client.log

RUN groupadd -g ${GID} qtim && useradd -u ${UID} -g ${GID} qtim
RUN mkdir /home/qtim && chown qtim:qtim /home/qtim

WORKDIR /var/www/client

USER qtim

EXPOSE ${PORT}

CMD npm run deploy && tail -f /var/log/client.log