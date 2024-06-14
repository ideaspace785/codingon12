import React from 'react'

export default function UseCallbackEx() {
    const [items, setItems]= useState(['item1','item2','item3',])
  return (
    <div>UseCallbackEx
        <ul>
            {items.map()}
        </ul>

    </div>
  )
}