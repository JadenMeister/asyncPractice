const http = require("http");
const fs = require("fs");
const MAIN_PAGE = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" href="style.css"
    </head>
    <body>
      <h1>안녕?</h1>
      <a href="/about">소개</a>
      <script src="script.js"></script>
    </body>
  </html>
  `;
const server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    console.log(req.url);
    if (req.url === "/") {
      const MAIN_PAGE = fs.readFileSync("index.html", "utf-8");
      res.statusCode = 200;
      res.setHeader("Content-Type", "utf-8; text/html");
      res.end(MAIN_PAGE);
    } else if (req.url === "/style.css") {
      const style = fs.readFileSync("style.css", "utf-8");
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css", "charset=utf-8;");
      res.end(style);
    } else if (req.url === "/script.js") {
      const script = fs.readFileSync("script.js", "charset=utf-8");
      res.statusCode = 200;
      res.setHeader("Content-Type", "utf-8; application/javascript");
      res.end(script);
    }
  }
});

let PORT = 3002;

server.listen(PORT, function () {
  console.log(`http://localhost:${PORT} 에서 서버 도는 중`);
});
