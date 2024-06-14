import React from 'react'
import { TodoItem } from '../types/types'

interface Props{
  todo:TodoItem;
  toggleComplete : (id: number)=>void;
}
export default function ToDoItem({todo, toggleComplete}:Props) {
  return (
    <li>
        <label>
            <input type="checkbox" defaultChecked={todo.completed } onChange={()=> toggleComplete(todo.id)} />{todo.text}
        </label>
    </li>
  )
}

