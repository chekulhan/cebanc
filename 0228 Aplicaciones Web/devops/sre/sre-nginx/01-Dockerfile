# Use official nginx alpine image
FROM nginx:alpine

# Copy the custom nginx config
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy the html file to serve
COPY index.html /usr/share/nginx/html/index.html

# Ensure /var/log/nginx exists and has correct ownership
RUN mkdir -p /var/log/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    rm /var/log/nginx/access.log /var/log/nginx/error.log && \
    touch /var/log/nginx/access.log /var/log/nginx/error.log && \
    chown nginx:nginx /var/log/nginx/access.log /var/log/nginx/error.log

# Expose port 80
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
