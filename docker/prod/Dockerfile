FROM node:22

ARG UID
ARG GID
ARG PORT
ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

RUN npm install -g pm2 cross-env

RUN groupmod -o -g ${GID} node && usermod -o -u ${UID} -g node node

RUN touch /var/log/client.log

WORKDIR /var/www/frontend

COPY package*.json ./
RUN npm install --production=false
COPY . .
RUN chown -R node:node /var/www/client
USER node

EXPOSE ${PORT}

CMD npm run deploy && tail -f /var/log/client.log