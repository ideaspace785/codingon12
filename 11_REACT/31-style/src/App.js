import CssModuleComponent from './CssModuleComponent';
import P1 from './P1';
import P2 from './P2';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>
      <h2>CSS Module</h2>
      <CssModuleComponent/>
      <hr />
      <SassComponent/>
      <hr />
      <h1>Styled Component</h1>
      <StyledComponent/>
      <hr />
      <P2/>
      <hr />
      <P1/>
    </div>
  );
}

export default App;
