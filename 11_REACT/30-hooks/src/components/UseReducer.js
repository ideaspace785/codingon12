import React, { useReducer } from 'react'

//다른 파일에 있다고 가정(외부로 로직 빼기)
// const initState=0;  //초기 상태값 또는 아래
const initState= {value : 0}


const reducer=(prevState, action)=>{
    //action: '~~'
    console.log(action)
    switch(action.type){
        case 'INCREMENT':
            // return prevState + 1;
            return {value: prevState.value+1}
        case 'DECREMENT':
            // return prevState - 1;
            return {value: prevState.value-1}

        case 'RESET':
            return initState;
        default:
            return prevState;
    }
}


export default function UseReducer() {
    // reducer : state를 업데이트 하는 함수
    // dispatch: 액션(state)가 어떻게 변경되어야 하는지에 대한 힌트 를 발생시키는 함수
    // state: 현재 상태
    // useReducer는 [state, dispatch]를  리턴함
    const [state, dispatch]= useReducer(reducer, initState)


    // const increment= () =>dispatch('INCREMENT')
    // const decrement= () =>dispatch('DECREMENT')
    // const reset= () =>dispatch('RESET')
    const increment= () =>dispatch({type:'INCREMENT', input: '~~'})
    const decrement= () =>dispatch({type:'DECREMENT'})
    const reset= () =>dispatch({type:'RESET'})


    

  return (
    <div>
        <h1>UseReducer</h1>

        <h2>{state.value}</h2>
        <button onClick={increment}>Plus</button>
        <button onClick={decrement}>Minus</button>
        <button onClick={reset}>Reset</button>

    </div>

  )
}
