import React, { useMemo, useState } from 'react'

export default function UseMemoEx() {
    const [count , setCount]=useState(0)
    const [input, setInput]= useState('')

    //[before]
    /*const calc = () =>{
        console.log("Calculating...");
        for(let i=0; i<10000000; i++){
            return count ** 2
        }
    }
    */

    //[After] _using UseMemory
    //count의 값이 바뀌면 컴포넌트는 리렌더링 되지만 , calc 연산되지 않음
    const calc =useMemo(() =>{
        console.log("Calculating...");
        for(let i=0; i<10000000; i++){
            return count ** 2
        }
    },[count])
  return (
    <div>
        <h1>UseMemoEx</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={()=>setCount(count+1)}>Plus</button>
        <p>count: {count}</p>
        {/*Before */}
        {/* <p>calc: {calc()}</p> */}

        {/*After */}
        <p>calc: {calc}</p>
    </div>

  )
}
