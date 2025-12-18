# syntax=docker/dockerfile:1
FROM nginx:1.27-alpine

# Copy the static site
COPY index.html /usr/share/nginx/html/index.html

# Expose default nginx port
EXPOSE 80
