import React from 'react'
import { Link } from 'react-router-dom'
//Link 새로고침 없이 경로 변경 a tag는 새로고침이 된다

export default function Header() {
  return (
    <header>
        <span>Router Tutorial</span>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/products'>Products</Link>
            </li>
            <li>
            <Link to='/student'>StudentHeader</Link>

            </li>
        </ul>
    </header>
  )
}
