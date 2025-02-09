/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
  const post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState(0);

  function 함수() {
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          <button
            onClick={() => {
              글제목[0] = "여자 코트 추천";
              console.log(글제목);
              글제목변경(글제목);
            }}
          >
            제목변경
          </button>
          {따봉}
        </h4>
        <p> 2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p> 2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p> 2월 17일 발행</p>
      </div>
      {/* <h4 style={{ color: "blue", fontSize: "30px" }}>{post}</h4> */}
    </div>
  );
}

export default App;
