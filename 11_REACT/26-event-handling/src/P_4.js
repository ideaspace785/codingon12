import { useState } from 'react';

function P_4() {
  const [fruit, setFruit] = useState('사과');
  const [bgColor, setBgColor] = useState('검정');
  const [textColor, setTextColor] = useState('검정');
  const [text, setText] = useState('');

  const fruits = {
    apple: '🍎', 
    banana: '🍌',
    pear: '🍐',
    watermelon: '🍉',
  };
  return (
    <div>
      <div>
        <label>
          과일:
          <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
            <option value="apple">사과</option>
            <option value="banana">바나나</option>
            <option value="pear">복숭아</option>
            <option value="watermelon">수박</option>
          </select>
        </label>
        <label>
          배경색:
          <select value={bgColor} onChange={(e) => setBgColor(e.target.value)}>
            <option value="black">검정</option>
            <option value="white">하양</option>
            <option value="orange">주황</option>
            <option value="yellow">노랑</option>
            <option value="green">초록</option>
            <option value="sky">파란</option>
            <option value="purple">보라</option>
            <option value="pink">분홍</option>
          </select>
        </label>
        <label>
          글자색:
          <select value={textColor} onChange={(e) => setTextColor(e.target.value)}>
            <option value="black">검정</option>
            <option value="white">하양</option>
            <option value="orange">주황</option>
            <option value="yellow">노랑</option>
            <option value="green">초록</option>
            <option value="sky">파란</option>
            <option value="purple">보라</option>
            <option value="pink">분홍</option>
          </select>
        </label>
        <label>
         내용:
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="내용을 입력하세요." />
        </label>
      </div>
      <div style={{fontSize:'4em'}}>{fruits[fruit]}</div>
      <div style={{backgroundColor: bgColor,color: textColor, padding: '20px',textAlign: 'center',fontSize: '2em',}}>
        <div>{text}</div>
      </div>
    </div>
  );
}

export default P_4;