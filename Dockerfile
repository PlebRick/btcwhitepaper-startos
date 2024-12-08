FROM nginx:alpine

# Copy the Bitcoin Whitepaper to the Nginx HTML directory
COPY bitcoin-whitepaper.pdf /usr/share/nginx/html/

# Use the default Nginx configuration to serve static files
# No custom configuration is added here

# Expose port 80
EXPOSE 80
