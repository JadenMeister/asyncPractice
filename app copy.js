const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    if (req.url === "/") {
      const page = `
      <!DOCTYPE html>
      <html>
      <head>
      <meta charset = "utf-8"
      </head>
      <body>
      <h1>안녕</h1>
      </body>
      </html>
      `;

      res.statusCode === 200;
      res.setHeader("Content-type", "utf-8; text/html");
    }
  }
});

let PORT = 3002;

server.listen(PORT, function () {
  console.log(`http://localhost:${PORT} 에서 서버 도는 중`);
});
