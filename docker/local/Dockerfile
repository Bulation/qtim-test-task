FROM node:22.16.0

ARG UID
ARG GID
ARG PORT
ARG NODE_ENV

ENV NODE_ENV=${NODE_ENV}

RUN groupmod -o -g ${GID} node && usermod -o -u ${UID} -g node node

WORKDIR /var/www/frontend

USER node

EXPOSE ${PORT}

CMD npm i && npm run dev