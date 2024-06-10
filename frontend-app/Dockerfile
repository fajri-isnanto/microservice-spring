# Gunakan node.js versi terbaru sebagai base image
FROM node:latest as build-stage

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh file dari direktori aplikasi Vue.js ke dalam container
COPY . .

# Build aplikasi Vue.js
RUN npm run build

# Stage kedua: Menggunakan nginx sebagai base image untuk membuat production image
FROM nginx:alpine

# Copy file build Vue.js dari stage pertama ke dalam direktori default nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Port yang akan diexpose oleh container (default 80 untuk nginx)
EXPOSE 80

# Command untuk menjalankan nginx di dalam container
CMD ["nginx", "-g", "daemon off;"]
