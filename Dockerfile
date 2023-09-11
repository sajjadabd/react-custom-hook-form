# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application's dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]