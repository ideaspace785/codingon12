
import { useState } from "react";
export default function Counter(){
    const [number, setNumber]=useState(0);
    const increase= () => {
        setNumber(number+1);

    };

const    alertMsg = (e, msg)=>{
    alert( msg);
}
const consoleMsg =(e, msg)=>{
    console.log("e", e);
    console.log('msg',msg)
}
    return(
        <div>
            <h1>Function Counter</h1>
            <h2>{number}</h2>

            {/* 함수에 인자가ㅏ 없을때 함수 이름만 전달 */}
            <button onClick={increase}> Increase</button>


            {/* 함수에 인자 보내기: 인자가 있는 함수를 익명함로 감싸서 처리 */}
            <button onClick={()=> alertMsg("안녕하세요")}>Alert 출력</button>

            <button>alert 출력</button>
            <button>console 출력</button>

        </div>
    )
}