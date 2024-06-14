import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function MainPage() {
    const [searchParams, setSearchParams]= useSearchParams();
    console.log(searchParams.get('mode')); //null or dark 
    // / => null
    // /?mode=dark => dark
  return (
    //.join() null 포함되지 않는다
    <div className={['Main', searchParams.get('mode')].join(' ')}>
        <h1>HOME</h1>
        <button  onClick={()=>setSearchParams({mode: 'dark'})}> 
            Dark Mode
        </button>
    </div>
  )
}
