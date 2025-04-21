# --- 1) Build stage ---
FROM node:16-alpine AS build
WORKDIR /app

# Копіюємо тільки package-файли, щоб кешувати npm install
COPY package*.json ./
RUN npm ci                # або yarn install

# Копіюємо весь код і збираємо production‑бандл
COPY . .
RUN npm run build         # зазвичай скрипт: react-scripts build або аналогічний

# --- 2) Production stage ---
FROM nginx:stable-alpine
# Копіюємо згенеровані файли в папку Nginx
COPY --from=build /app/build /usr/share/nginx/html

# (За потреби) підмінюємо конфіг nginx – створіть nginx.conf поруч із Dockerfile
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
