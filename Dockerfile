# Stage 1: Build the Vue.js application
FROM node:16 as build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vue.js application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:stable-alpine as production-stage

# Copy the built application from the build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration (if any)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]