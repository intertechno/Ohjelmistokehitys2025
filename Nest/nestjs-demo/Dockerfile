# ---- Base Node image ----
FROM node:20-alpine AS base

# Set working directory
WORKDIR /usr/src/app

# ---- Install dependencies ----
FROM base AS deps
COPY package*.json ./
RUN npm install --production=false

# ---- Build the app ----
FROM deps AS build
COPY . .
RUN npm run build

# ---- Production image ----
FROM node:20-alpine AS prod

# Set working directory
WORKDIR /usr/src/app

# Copy only necessary files
COPY package*.json ./
RUN npm install --only=production

# Copy built files from build stage
COPY --from=build /usr/src/app/dist ./dist

# Expose the Nest.js default port
EXPOSE 3000

# Start the app
CMD ["node", "dist/main"]
