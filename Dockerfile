# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the app's source code to the container
COPY . .

# Specify the command to run the app
CMD [ "npm", "start" ]
