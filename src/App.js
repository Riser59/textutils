// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (msg,type) => {
    setAlert({
      msg: msg,
      type: type
    })
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#003333';
      document.body.style.color = 'white';
      showAlert("Enabled Dark Mode", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Enabled Light Mode", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title = "TextUtils" about = "About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
        <TextForm heading = "Enter your text to analyze" mode={mode}/>
        {/* <Routes>
          <Route exact path="/" element={<TextForm heading = "Enter your text to analyze" mode={mode}/>}/>
          <Route exact path="/about" element={<About title="About Us"/>}/>
        </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
