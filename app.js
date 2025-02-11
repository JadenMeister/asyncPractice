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
      console.log(" /wishlist 요청 들어옴"); //요청이 들어왓나 확인
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(wishList)); // 데이터를 json으로 반환
      console.log(" /wishlist 응답");
    }
  } else if (req.method === "POST" && req.url === "/created_list") {
    let item = "";

    req.on("data", chunk => {
      item += chunk;
    });

    req.on("end", () => {
      // 데이터를 모두 받은 뒤  행동~
      const list = querystring.parse(item); //URL인코딩 쿼리스트링을 객체로 변환하는 qs.parse()를 이용
      console.log(" 받은 데이터:", list);
      wishList.push(list); // 객체로 변환된 데이터를 wishlist에 추가
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
