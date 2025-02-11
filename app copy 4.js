const http = require("http");
const fs = require("fs"); // ! 추가함

const server = http.createServer(function (request, response) {
  if (request.method === "GET") {
    console.log(request.url);
    if (request.url === "/") {
      // * 추가함
      const MAIN_PAGE = fs.readFileSync("index.html", "utf-8");

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      response.end(MAIN_PAGE);
    } else if (request.url === "/style.css") {
      // * 추가함
      const style = fs.readFileSync("style.css", "utf-8");

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/css");
      response.end(style);
    } else if (request.url === "/script.js") {
      // * 추가함
      const script = fs.readFileSync("script.js", "utf-8");

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/javascript");

      response.end(script);
    }
  }

  if (request.method === "POST") {
    console.log(request.url);
    request.on("data", function (data) {
      console.log(data.toString());
    });
    request.on("end", function () {
      console.log("응답 잘 받음");
    });
  }
});

server.listen(3000, function () {
  console.log("서버 도는 중 http://localhost:3000");
});
