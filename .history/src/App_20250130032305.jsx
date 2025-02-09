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
  let [발행일, 발행일변경] = useState(["2025.1.26", "2025.1.27", "2025.1.28"]);
  let [modal, setModal] = useState(false);
  let [index, setIndex] = useState(0);
  let [입력값, 입력값변경] = useState("");

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
                setIndex(index);
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
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  const 글제목copy = [
                    ...글제목.slice(0, index),
                    ...글제목.slice(index + 1, 글제목.length),
                  ];
                  //copy.splice(index,1)   이런방식도 있지만...내방식이 더좋다 > <
                  글제목변경(글제목copy);
                }}
              >
                삭제
              </button>
            </h4>
            <p> {발행일[index]} 발행</p>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          입력값변경(e.target.value); //react에서 state 변경이 비동기로 늦게 됨.
        }}
      />
      <button
        onClick={() => {
          const copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);

          const 따봉copy = [...따봉];
          따봉copy.unshift(0);
          따봉변경(따봉copy);

          const 발행일copy = [...발행일];
          const date = new Date();
          const nowStr = `${date.getFullYear()}.${
            date.getMonth() + 1
          }.${date.getDate()}`;
          발행일copy.unshift(nowStr);
          발행일변경(발행일copy);
          setModal(false);
        }}
      >
        글발행
      </button>

      {
        //조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
        modal === true ? (
          <Modal
            글제목={글제목}
            글제목변경={글제목변경}
            index={index}
            따봉={따봉}
            발행일={발행일}
          />
        ) : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>
        {props.글제목[props.index]} <span>👍</span>
        {props.따봉[props.index]}
      </h4>
      <p>{props.발행일[props.index]}</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          const copy = [...props.글제목];
          copy[props.index] = "여자코트 추천";
          props.글제목변경(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor() {
    super();
  }
  render() {}
}

export default App;
