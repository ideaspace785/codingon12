import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent'
import FoodComponent from './FoodComponent';
import ExComponent from './ExComponent';
import Pr3 from './Pr3';

function App() {
  const handleValid = () => {console.log("콘솔 띄우기 성공!");};
  return (
    <div className="App">
      <FunctionComponent name = "코딩온" />
      <FunctionComponent />

      <FunctionComponent>children</FunctionComponent>
      <FunctionComponent name = {1} />
      <hr/>
      <ClassComponent name="클래스 코딩온"/>
      <ClassComponent />
      <hr/>
      <FoodComponent name="food"/>
      <FoodComponent />
      <hr/>
      <ExComponent title="나의 하루는 4시 40분에 시작된다" author="김유진" price={13500} type="자기개발서" />
      <hr />
      <Pr3 text={"텍스트 받음"} valid={handleValid} />

    </div>
    
   
  );
}

export default App;
