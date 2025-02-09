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
  let [모달상세, 모달상세변경] = useState({ 글제목: "", 발행일: "", 따봉: "" });
  let [index, setIndex] = useState(0);

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
                const 모달상세copy = { ...모달상세 };
                모달상세.글제목 = item;
                모달상세.발행일 = "25.1.29(수)";
                모달상세.따봉 = 따봉[index];
                setIndex = index;
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
        modal === true ? (
          <Modal
            글제목={글제목}
            글제목변경={글제목변경}
            모달상세={모달상세}
            모달상세변경={모달상세변경}
            index={index}
          />
        ) : null
      }
    </div>
  );
}

function Modal(props) {
  console.log("props:", props);
  return (
    <div className="modal">
      <h4>
        {props.모달상세.글제목} <span>👍</span>
        {props.모달상세.따봉}
      </h4>
      <p>{props.모달상세.발행일}</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          const copy = [...props.글제목];
          copy[props.index] = "여자코트 추천";
          props.글제목변경(copy);
          const 모달상세copy = { ...props.모달상세 };

          console.log("모달상세copy:", 모달상세copy);
          모달상세copy.글제목 = "여자코트 추천";
          console.log("모달상세copy:", 모달상세copy);
          props.모달상세변경(모달상세copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
