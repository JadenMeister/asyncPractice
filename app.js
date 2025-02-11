const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

let wishList = [{ name: "카메라", price: "1000", quantity: "2" }];

const server = http.createServer(function (req, res) {
  console.log(`요청 받음: ${req.method} ${req.url}`);

  if (req.method === "GET") {
    if (req.url === "/") {
      const MAIN_PAGE = fs.readFileSync("nohello.html", "utf-8");
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(MAIN_PAGE);
    } else if (req.url === "/nohello.css") {
      const CSS_FILE = fs.readFileSync("nohello.css", "utf-8");
      res.setHeader("Content-Type", "text/css; charset=utf-8");
      res.end(CSS_FILE);
    } else if (req.url === "/wishlist") {
      console.log(" /wishlist 요청 들어옴"); //확인
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(wishList)); // 데이터 반환
      console.log(" /wishlist 응답");
    }
  } else if (req.method === "POST" && req.url === "/created_list") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      const list = querystring.parse(body);
      console.log(" 받은 데이터:", list);
      wishList.push(list);
      console.log("새 데이터 추가됨:", list);

      res.writeHead(302, { Location: "/" }); // 입력 후 새로고침
      res.end();
    });
  }
});

let PORT = 3003;
server.listen(PORT, function () {
  console.log(`http://localhost:${PORT} 에서 서버 도는 중`);
});
