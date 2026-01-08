const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    let filename = queryObject.file || 'welcome.txt';

    // 漏洞點：未過濾 ../，直接拼接路徑
    const filePath = path.join(__dirname, 'public', filename);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("檔案不存在！嘗試存取的路徑為: " + filePath);
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
});

server.listen(3000, () => console.log('題目運行中：http://localhost:3000'));