const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = 5000;

app.use(cors()); // 클라이언트와 서버 간 요청 허용
app.use(express.json()); // JSON 데이터 처리

// 간단한 API 엔드포인트 예제
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Node.js!" });
});

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Hello, Node.js!");
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
