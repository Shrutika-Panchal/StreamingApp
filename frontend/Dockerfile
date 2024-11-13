# Use Node.js 20 base image
FROM node:20

# Set working directory
WORKDIR /app

<<<<<<< HEAD
# Copy package.json and package-lock.json first to install dependencies separately
# This helps with caching dependencies when only code changes, not the dependencies
COPY package*.json ./

# Install dependencies
=======
# Copy project files to container
COPY . .

# Install dependencies and pm2
>>>>>>> 72f78fa2b4d8016b557a5fa1642b3ddf748752d7
RUN npm install

# Install pm2 globally
RUN npm install -g pm2

<<<<<<< HEAD
# Copy the rest of the project files
COPY . .

=======
>>>>>>> 72f78fa2b4d8016b557a5fa1642b3ddf748752d7
# Copy and set permissions for start script
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

# Expose the application port
EXPOSE 3000

<<<<<<< HEAD
# Start the application with pm2 using the start.sh script
CMD ["/app/start.sh"]
=======
# Start the application
CMD ["/app/start.sh"]


RUN npm install -g pm2
>>>>>>> 72f78fa2b4d8016b557a5fa1642b3ddf748752d7
