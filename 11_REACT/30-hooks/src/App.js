import './App.css';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Faq from './components/Faq';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducer from './components/UseReducer';
import Form from './components/react-hook-form/Form'
import FromEx1 from './components/react-hook-form/FromEx1';

function App() {
  return (
    <div className="App">
      <h1>폼 실습1</h1>
      <FromEx1/>
      <hr />
      <Form/>
      <hr />
     <UseMemoEx/>
     <hr />
     <UseCallbackEx/>
     <hr />
     <UseCallbackEx2/>
    <hr />
    <Ex1/>
    <hr />
    <Ex2/>
    <hr />
    <UseReducer/>
    <hr />
    <Faq/>



    </div>
  );
}

export default App;
