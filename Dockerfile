FROM node:18.14.2 as base
LABEL authors="Alexandre VARGAS LOPEZ"
WORKDIR /app
COPY package.json .
RUN --mount=type=cache,target=/root/.npm npm i
COPY . .
RUN npm run build
EXPOSE ${PORT}
CMD ["npm", "run", "preview", "--host ${PORT}"]
