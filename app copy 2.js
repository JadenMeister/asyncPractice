const http = require("http");
const fs = require("fs");

function makePage(text) {
  const page = `
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset = "utf-8"
  </head>
  <body>
  <h1>${text}</h1>
  </body>
  </html>
  `;
  return page;
}

const server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.statusCode === 200;
      res.setHeader("Content-type", "utf-8; text/html");
      res.end(makePage("하이"));
    } else {
      function resUrl(url) {
        res.statusCode === 200;
        res.setHeader("Content-type", "utf-8; text/html");
        res.end(makePage(url));
      }
      resUrl(req.url);
    }
  }

  if (req.url === "/abc") {
  }
});

let PORT = 3002;

server.listen(PORT, function () {
  console.log(`http://localhost:${PORT} 에서 서버 도는 중`);
});
