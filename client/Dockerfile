#Dockerfile for React

# Build React Client using the base node image container from docker hub
FROM node:16.3.0-alpine

# Working directory be app
WORKDIR /app

# Copying dependancies
COPY package.json /app

# installing dependencies

RUN npm install

# copy local files to app folder - created dockerignore file to not copy node_modules
COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm","start"]