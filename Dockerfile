# Dockerfile for Node Express 

# Using the base node image container from docker hub
FROM node:16.3.0-alpine

# Create App Directory
RUN mkdir -p /app
# Working directory be app
WORKDIR /app

# Copying dependancies
COPY package.json /app

# installing dependencies

RUN npm install

# copy local files to app folder - created dockerignore file to not copy node_modules etc
COPY . .

EXPOSE 5000

CMD ["npm","start"]