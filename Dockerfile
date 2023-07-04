FROM node:lts-alpine as frontend

ENV NODE_ENV=production
WORKDIR /app
COPY ./frontend/ .
RUN yarn && yarn build

FROM node:lts-alpine as backend

ENV NODE_ENV=production
WORKDIR /app/backend
COPY ./backend/ .
RUN yarn install
COPY --from=frontend /app/build /app/frontend/build
EXPOSE 8080

CMD ["npm","run","start"]