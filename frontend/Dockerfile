# Step 1: Build the app
FROM node:22-alpine
# AS frontend-build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Step 2: Serve the app with nginx server
# FROM nginx:alpine
# COPY --from=frontend-build /app/dist /usr/share/nginx/html
# Copy the Nginx configuration
# COPY nginx.conf /etc/nginx/nginx.conf

# Step 2: Install serve to serve the built app
RUN npm install -g serve

# Step 3: Expose the port and start the app 
EXPOSE 5173

# Step 4: Start Nginx
# CMD ["nginx", "-g", "daemon off;"]

# Step 4: Start the app using serve
CMD ["serve", "-s", "dist", "-l", "5173"]
# CMD ["serve", "-s", "build", "-l", "5173"]
