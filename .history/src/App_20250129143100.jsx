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
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          const 정렬된글제목 = [...글제목].sort();
          글제목변경(정렬된글제목);
        }}
      >
        가나다순정렬
      </button>

      {글제목.map(function (item, index) {
        return (
          <div className="list" key={index}>
            <h4
              onClick={(event) => {
                event.preventDefault();
                setModal(!modal);
              }}
            >
              {item}
              <span
                onClick={(event) => {
                  event.stopPropagation();
                  const 따봉카피 = [...따봉];
                  따봉카피[index] = 따봉카피[index] + 1;
                  따봉변경(따봉카피);
                }}
              >
                👍
              </span>
              {따봉[index]}
            </h4>
            <p> 2월 17일 발행</p>
          </div>
        );
      })}

      {
        //조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
        modal === true ? <Modal 글제목={글제목} /> : null
      }
    </div>
  );
}

function Modal(props) {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);

  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <buttion
        onClick={() => {
          const copy = [...글제목];
          copy[0] = "여자코트 추천";
          글제목변경(copy);
        }}
      >
        글수정
      </buttion>
    </div>
  );
}

export default App;
