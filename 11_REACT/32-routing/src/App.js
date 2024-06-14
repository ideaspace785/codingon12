// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Student from './pages/Student';

function App() {
  return (
    <Router>
      <Main />
    
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const isStudentPage = location.pathname.includes('/student');

  return (
    <>
      {!isStudentPage && <Nav />}
      <Routes>
        <Route path="/student/:name" element={<Student />} />
        <Route path="/student/new/:actualName" element={<Student />} />
      </Routes>
    </>
  );
}

export default App;
