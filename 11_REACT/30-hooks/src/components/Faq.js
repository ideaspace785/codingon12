import React from 'react'
import useToggle from '../hooks/useToggle'

export default function Faq() {
    const [isFaqOpen, setIsFaqOpen]=useToggle();
  return (
    <div>
        <h1>custom hook (useToggle)</h1>
        <div onClick={setIsFaqOpen}>Q. 리액트에서 커스텀 훅을 만들 수 있나요?</div>

        {/* isFaqOpen true일때 answer 보이고  */}
        {isFaqOpen && <div>A. 네 가능하죠~</div>}
    </div>
  )
}
