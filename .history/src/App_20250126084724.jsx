import { useState } from "react";
import "./App.css";

function App() {
  const post = "강남 우동 맛집";
  let [a, b] = useState("남자 코트 추천");

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>블로그임</h4>
      </div>
      <div className="list">
        <h4>글제목</h4>
        <p> 2월 17일 발행</p>
      </div>
      {/* <h4 style={{ color: "blue", fontSize: "30px" }}>{post}</h4> */}
    </div>
  );
}

export default App;
