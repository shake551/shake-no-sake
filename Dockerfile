FROM node:16-alpine
WORKDIR /app
EXPOSE 3000

COPY src/package.json src/package-lock.json ../

RUN npm install
