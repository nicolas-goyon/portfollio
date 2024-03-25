# Use an official Node runtime as a builder stage
FROM node:14 as builder

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source
COPY /src /app/src

# Copy the public directory
COPY /public /app/public

# Build the app
RUN npm run build

# Use Nginx for serving the build files
FROM nginx:1.17.1-alpine

# Copy the build files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

# Build cmd
# docker build -t react-app .

# Run cmd
# docker run -p 8080:80 react-app