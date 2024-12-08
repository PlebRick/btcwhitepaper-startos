FROM nginx:alpine

# Copy the Bitcoin Whitepaper to the Nginx HTML directory
COPY bitcoin-whitepaper.pdf /usr/share/nginx/html/bitcoin-whitepaper.pdf

# Add a custom Nginx configuration
RUN echo 'server {\
    listen 80;\
    location / {\
    default_type application/pdf;\
    root /usr/share/nginx/html;\
    index bitcoin-whitepaper.pdf;\
    }\
    }' > /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
