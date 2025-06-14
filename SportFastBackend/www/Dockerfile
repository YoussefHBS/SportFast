FROM php:8.2-cli

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y unzip \
    && docker-php-ext-install pdo pdo_mysql

EXPOSE 8000

CMD ["php", "-S", "localhost:8000", "-t", "public"]
