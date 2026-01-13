FROM php:8.1-apache

# 安裝 ping 工具
RUN apt-get update && apt-get install -y iputils-ping

# 複製網頁
COPY html/ /var/www/html/

# 放置 Flag
RUN echo "CTF{6an9erous_c0mman6_1nject10n}" > /var/www/flag.txt

EXPOSE 80