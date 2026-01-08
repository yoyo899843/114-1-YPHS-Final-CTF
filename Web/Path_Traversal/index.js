const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const filename = queryObject.file;

    // 如果沒有參數，回傳漂亮的前端頁面
    if (!filename) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="zh-TW">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>CloudAssets 雲端資源庫</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                <style>
                    body { background: #f4f7f6; }
                    .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 60px 0; }
                    .file-card { transition: transform 0.2s; cursor: pointer; }
                    .file-card:hover { transform: translateY(-5px); }
                </style>
            </head>
            <body>
                <div class="hero text-center">
                    <h1>☁️ CloudAssets 檔案瀏覽器</h1>
                    <p>快速存取您的靜態資源與圖片</p>
                </div>
                <div class="container mt-5">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <form action="/" method="GET" class="input-group mb-4">
                                <input type="text" name="file" class="form-control" placeholder="請輸入檔名 (例如: user.png)...">
                                <button class="btn btn-primary" type="submit">查看檔案</button>
                            </form>
                            <div class="row g-3">
                                <div class="col-6">
                                    <a href="/?file=avatar1.png" class="text-decoration-none">
                                        <div class="card file-card p-3 text-center">🖼️ Avatar 1</div>
                                    </a>
                                </div>
                                <div class="col-6">
                                    <a href="/?file=avatar2.png" class="text-decoration-none">
                                        <div class="card file-card p-3 text-center">🖼️ Avatar 2</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `);
        return;
    }

    // 漏洞點：未經過濾的路徑拼接
    const filePath = path.join(__dirname, 'public', filename);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end("⚠️ 錯誤：無法讀取路徑 -> " + filePath);
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
});

server.listen(3000);