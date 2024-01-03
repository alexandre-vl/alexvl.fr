FROM node:lts-alpine as base
LABEL authors="Alexandre VARGAS LOPEZ"
WORKDIR /app
COPY package.json .
RUN --mount=type=cache,target=/root/.npm npm i
COPY . .
RUN npm run build
EXPOSE ${PORT}
ENTRYPOINT ["vite", "preview", "--host", "--port", "3042"]
