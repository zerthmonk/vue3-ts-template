FROM node:20-alpine AS base
RUN npm install pnpm@latest -g --silent

FROM base AS dev

ENV PATH /opt/app/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY ./package*.json /opt/app/
COPY ./pnpm-lock.yaml /opt/app/
RUN pnpm install
COPY . .

EXPOSE 3000
