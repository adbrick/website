FROM node:20 as builder
WORKDIR /workspace/
COPY . .
RUN npm install
RUN npm run build

FROM ghcr.io/aaronellington/static-web-server:latest
COPY --from=builder /workspace/out ./public
EXPOSE 2828
