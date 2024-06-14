import React, { useCallback, useState } from 'react';

export default function UseCallbackEx(){
    const [text, setText]=useState('');

    // {before}
    // const onChangeText= (e)=>{
    //     setText(e.target.value)
    // }

    // [After]
    // UseCallback hook 으로 함수를 기억
    // component가 리렌더링 되어도, 의존성 배열에 있는 값이 바뀌지 않는 한 기존 
    // OncChange 함수가 기억이 되고 있다
    const onChangeText=useCallback((e)=>{
        setText(e.target.value)
    }, [])


    return(
        <div>
            <h1>UseCallbackEx</h1>
        <input type="text" onChange={onChangeText} />
        <div>작성합 값: {text || '없음'}</div>
        </div>
    )

}