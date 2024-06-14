// Use State
import { useState } from "react";

// const SayFunction = () =>{
//     console.log(useState("Welcome!"))  //이거의 아웃풋은 [welcome!, f()]
//     const [message, setMessage]=useState("Welcome");
//     //useState 초기값
//     //message: 메시지 상태 => state 변수
//     //setMessage: message state 값을 바꾸는 함수 


//     function onClickEnter() {
//         setMessage('onClickEnter message~안녕하세요');
//     }
//     function onClickLeave= ()=>{
//         setMessage('onClickLeave message~안녕히 가세요')
//     }
//     return(
//         //REACT에서는 함수 호출시 괄호 없이 한다. 
//         //괄호를 없애 함수를 바로 실행하지 않고, 클릭이 발생했을때 실행
//         //-REACT


//         <div>
//             <h1>{message}</h1>
//             <button onClick={onClickEnter}>입장</button>
//             <button onClick={onClickLeave}>퇴장</button>
//         </div>
//     )
// }
const SayFunction = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrease = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase} style={{fontSize:'50px'}}>❤️</button>
      <button onClick={decrease} style={{fontSize:'50px'}}>🥺</button>
    </div>
  );
};



export default SayFunction;