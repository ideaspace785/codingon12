import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const style={margin: '4px'}
    return (
      <div>
          <Link to='/'>
          <h2>ReactRouter 실습</h2>
        </Link>
          <nav>
          <ul>
            <li style={{style}}>
              <Link to='/student/kdt'>학생KDT</Link>
            </li>
            <li style={{style}}>
              <Link to='/student/codingon'>코딩온</Link>
            </li>
            <li style={{style}}>
              <Link to='/student/new?name=kdt3rd'>searchParams</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default Nav;
