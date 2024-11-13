# Use Node.js 20 base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies separately
# This helps with caching dependencies when only code changes, not the dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Install pm2 globally
RUN npm install -g pm2

# Copy the rest of the project files
COPY . .

# Copy and set permissions for start script
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

# Expose the application port
EXPOSE 3000

# Start the application with pm2 using the start.sh script
CMD ["/app/start.sh"]