
import './App.css';
import Alphabet from './Alphabet';
import P1 from './P1';
import P2 from './P2';
import Visitor from './Visitor';

function App() {
  return (
    <div className="App">
     <Alphabet/>
     <P1/>
     <hr />
     <P2 />
     <hr />
     <Visitor />
    </div>
  );
}

export default App;
