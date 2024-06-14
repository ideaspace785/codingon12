
import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import HandlerEx from './components/ex/HandlerEx';
import P_2 from './P_2';
import P_3 from './P_3';
import P_4 from './P_4';
function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <ClassBind />
      <hr />
      <Counter />
      <hr />
      <HandlerEx />
      <hr />
      <P_2 />
      <hr />
      <P_3 />
      <hr />
      <P_4 />
      {/* <hr />
      <ExAll /> */}
 
    </div>
  );
}

export default App;
