import { useState } from "react";

export default function App() {
  const [originNum, setOriginNum] = useState(0);
  const [newNum, setNewNum] = useState(0);
  const [resultNum, setResultNum] = useState(0);

  const addNum = () => {
    console.log(e.target.value);
    setOriginNum(originNum - newNum);
  };

  const subtractNum = () => {};

  const resetNum = () => {};

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="text" /> 만큼을 <button onClick={addNum}>더할게요</button>{" "}
        <button onClick={subtractNum}>뺄게요</button>
        <button onClick={resetNum}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{resultNum}</p>
      </div>
    </div>
  );
}
