#Stage 1
FROM node:18-alpine as builder
WORKDIR /app
COPY package.json
COPY package-lock.json
RUN npm install
COPY ..
RUN npm build

#Stage 2
FROM nginx:1.23.3-alpine-slim
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx","-g", "deamon off;"]