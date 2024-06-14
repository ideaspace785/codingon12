import React from 'react'
import './styles/SassComponent.scss';

export default function SassComponent() {
  return (
    <>
    <div className='container'>
        <h1>SassComponent</h1>
        <div className='box red'></div>
        <div className='box yellow'></div>
        <div className='box pink'></div>
    </div>
    <div className='box yellow'>Test</div>
    <button className='btn'>button</button>
    <button className='btn-primary'>btn Primary</button>
    
    </>
  )
}
