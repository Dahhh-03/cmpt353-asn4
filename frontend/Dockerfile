# Since Assignment 4 requires a production build (dist/ folder), the Dockerfile should build the React app and then serve those static files

# Use the latest Node.js image
FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies (React, React-Router-Dom)
COPY package*.json ./
RUN npm install

# Copy the frontend source code
COPY . .

# Generate the production build output (the dist/ folder)
RUN npm run build

# Inform Docker the container will use port 80
EXPOSE 80

# Use npx to run a simple server to serve the static 'dist' folder on port 80
CMD ["npx", "serve", "-s", "dist", "-p", "80"]