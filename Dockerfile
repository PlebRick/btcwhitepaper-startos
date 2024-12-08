FROM nginx:alpine

COPY bitcoin-whitepaper.pdf /usr/share/nginx/html/bitcoin-whitepaper.pdf

RUN echo 'server {\
    listen 80;\
    location / {\
    default_type application/pdf;\
    root /usr/share/nginx/html;\
    index bitcoin-whitepaper.pdf;\
    }\
    }' > /etc/nginx/conf.d/default.conf

EXPOSE 80
