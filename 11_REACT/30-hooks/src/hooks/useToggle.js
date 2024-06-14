import {useState} from 'react'

export default function useToggle(initValue = false){
    //value : toggle의 상태로 쓸거다!!!
    //setValue
    const [value, setValue]=useState(initValue)

    //toggle 상태 스위치
    const toggleValue = () =>{
        setValue(!value);
    };
    return[value, toggleValue];
}