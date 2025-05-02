# Step 1: Build the app
FROM node:22-alpine AS frontend-build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

# Step 2: Serve the app with nginx server
FROM nginx:stable-alpine AS frontend-prod

COPY --from=frontend-build /app/dist /usr/share/nginx/html

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
