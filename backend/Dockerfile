# This container runs your Express server and handles the MySQL connection.
# Use the latest Node.js image as the foundation
FROM node:latest

# Define the working directory inside the container
WORKDIR /usr/src/app

# Copy package files first to optimize layer caching
COPY package*.json ./

# Install required dependencies (Express, MySQL2, CORS)
RUN npm install

# Copy the rest of the backend source code
COPY . .

# Inform Docker that the container listens on port 8080 internally
EXPOSE 8080

# The command to start your Node.js server
CMD ["node", "src/server.js"]