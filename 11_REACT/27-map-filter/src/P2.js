import React, { useState } from 'react'

export default function P2() {

    const [name, setName]= useState('');
    const[email, setEmail]= useState('');
    const [userInfo, setUserInfo]=useState([]);
    const addInfo =()=>{
        setUserInfo([...userInfo, {name, email}]);
    }
    const handlerRegister = () =>{
        setUserInfo([...userInfo, {name, email}]);
    };
    const deleteInfo = (targetId)=>{
        const newUserInfo= userInfo.filter((_, i)  => i !==targetId );
        setUserInfo(newUserInfo);
    }
  return (
    <div>
        <input type="text" placeholder='이름' value={name} onChange={(e)=>setName(e.target.value)}/>

        <input type="email" placeholder='이메일' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button onClick={addInfo}>등록</button>
        {userInfo.map((user,targetId)=>(
            <div key={targetId} onDoubleClick={()=>deleteInfo(targetId)}>
            {user.name}:{user.email}
        </div>
        )
    )}
            
    </div>
  )
}
