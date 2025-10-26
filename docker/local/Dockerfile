FROM node:22

# Аргументы
ARG UID
ARG GID
ARG PORT
ARG NODE_ENV

ENV NODE_ENV=${NODE_ENV}

RUN groupmod -o -g ${GID} node && usermod -o -u ${UID} -g node node

RUN touch /var/log/client.log

WORKDIR /var/www/client

COPY package*.json ./
RUN npm install --production=false
COPY . .
RUN chown -R node:node /var/www/client
USER node

EXPOSE ${PORT}

CMD ["npm", "run", "dev"]
