FROM ghcr.io/aaronellington/static-web-server:latest
COPY ./public ./public
EXPOSE 2828
