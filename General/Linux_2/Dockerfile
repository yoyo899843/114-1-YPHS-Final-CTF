# 使用超輕量 Alpine Linux
FROM alpine:latest

# 安裝 ttyd 以及你需要的基礎工具 (例如 bash, curl, vim)
RUN apk add --no-cache ttyd bash

# 設定工作目錄
WORKDIR /root

# 暴露 7681 埠口 (ttyd 預設埠口)
EXPOSE 7681

# 啟動 ttyd，並執行 bash
# -W 參數允許在網頁上進行「寫入」(輸入指令)
ENTRYPOINT ["ttyd", "-W", "bash"]