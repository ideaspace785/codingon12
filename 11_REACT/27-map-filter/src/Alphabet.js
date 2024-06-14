import React, { useState } from 'react'

export default function Alphabet() {
    /*
    const list=['a','b','c','d','e'];
    const items=list.map((txt, index,array) => {
        console.log('txt:', txt);
        console.log('index:', index);
        console.log('array:', array);
        return txt+index;
    });
    console.log(items);

  return (
    <div>
        <ol>
            {list.map((value, index)=>{
                return<li key={index}>{value}</li>
            })}
        </ol>
    </div>
  )

  */
 const [alphabet,setAlphabet]= useState([
    {
    id:1,
    txt:'a'
    },
    {
    id:2,
    txt:'p'
    },
    {
    id:3,
    txt:'p'
    },
    {
    id:4,
    txt:'p'
    },
    {
     id:5,
    txt:'l'
    },
    {
        id:6,
        txt:'e'
    }     
 ])
 const [inputAlpha, setInputAlpha]=useState('');
 const addAlpha =()=>{
    // alphabet 배열에 값을 추가
    if(inputAlpha.trim().length===0)return;

    const newAlpha=alphabet.concat({
      id: alphabet+1,
      txt:inputAlpha
    });
    setAlphabet(newAlpha);
    setInputAlpha('');
 }
 const deleteAlpha= (targetId)=>{
    const newAlpha=alphabet.filter((element)=>{
        return element.id !== targetId;
    });
    setAlphabet(newAlpha);
 }
//  const value=null || 'default value';

    return(
    <div>
        {/* 사용자한테 입력을 받아 배열에 추가 */}
        <input type="text" placeholder='알파벳 입력' value={inputAlpha} 
        onChange={(e)=>setInputAlpha(e.target.value)}/>
        <button onClick={addAlpha}>Add</button>
        {alphabet.map((value)=>{
            return <li key={value.id} onDoubleClick={()=> deleteAlpha(value.id)}>{value.txt}</li>
        })}
        {/* 단축평가 */}
        {alphabet.length === 0 && <div>알파벳을 입력해주세요!</div>}
        { null || <div>값이 정의되지 않았어요!</div>}

        {/* 3항 연산자 */}
        {alphabet.length !== 0 ? (
        alphabet.map((value) => (
          <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
            {value.txt}
          </li>
        ))
      ) : (
        <div>빈 배열입니다!</div>
      )}

    </div>
    )
}
