import React from 'react';
import './App.css';
import Student from './components/Student';
import ToDoList from './components/ToDoList';

function App() {
  const handleClick= (name:string, grade:number, score:number) =>{
    //   이름, 학년, 점수 출력
    console.log(`내 이름은 ${name}이고, ${grade}학년, 점수는 ${score}점`)
  }
  return (
    <div className="App">
      <Student name="코딩온" grade={3} part='CS' handleClick={handleClick}/>
      <Student name='코딩오프' grade={2} handleClick={handleClick}/>
      <ToDoList/>
    </div>

  );
}


export default App;
