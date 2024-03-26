# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}


WORKDIR /app

COPY package*.json ./

RUN npm install

RUN mkdir /app/node_modules/.cache \
    && chown -R node:node /app/node_modules/.cache

# Run the application as a non-root user.
USER node

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 5173

# Run the application.
CMD npm run start:docker
