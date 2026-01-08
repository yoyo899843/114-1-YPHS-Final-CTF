FROM node:alpine

WORKDIR /app

# 建立預設資料夾
RUN mkdir public && echo "這是公開內容" > public/welcome.txt

# 在根目錄藏一個 flag（模擬敏感檔案）
RUN echo "CTF{Docker_Path_Traversal_Master_2026}" > /flag.txt

COPY index.js .

EXPOSE 3000

CMD ["node", "index.js"]