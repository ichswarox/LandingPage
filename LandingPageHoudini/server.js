const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 设置Content Security Policy头
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://client.crisp.chat https://sdk.51.la blob:; object-src 'none'");
  next();
});

// 静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// 所有路由都返回index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
