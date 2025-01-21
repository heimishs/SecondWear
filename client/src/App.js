import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>React와 Node.js 연결하기</h1>
      <p>Node.js에서 온 메시지: {message}</p>
    </div>
  );
}

export default App;
