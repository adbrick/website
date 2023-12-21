FROM node:21 as builder
WORKDIR /workspace/
COPY . .

FROM ghcr.io/aaronellington/static-web-server:latest
COPY --from=builder /workspace/out ./public
EXPOSE 2828
