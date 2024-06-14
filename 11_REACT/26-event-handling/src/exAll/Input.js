import React from 'react'

export default function InputSol({setData}) {
  return (
    <>
        내용 : <input type="text" onChange={() => {
            setData((data) => ({...data, content: e.target.value}))
        }} />
    </>
  )
}