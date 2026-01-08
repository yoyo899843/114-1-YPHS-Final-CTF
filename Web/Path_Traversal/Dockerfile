FROM node:alpine

WORKDIR /app

# 建立資源資料夾與假檔案
RUN mkdir public && \
    echo "Fake PNG Data" > public/avatar1.png && \
    echo "Fake PNG Data" > public/avatar2.png && \
    echo "恭喜！你成功讀取了公開區域的歡迎文件。" > public/welcome.txt

# 在根目錄隱藏 Flag
RUN echo "CTF{B3autifu1_Fr0ntend_But_Uns3cure_B4ckend}" > /flag.txt

COPY index.js .

EXPOSE 3000

CMD ["node", "index.js"]