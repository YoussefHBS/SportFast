FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN [ -d node_modules ] || npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/sportfast-frontend/browser/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
