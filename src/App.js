import './App.css';
import {Routes, Route} from "react-router-dom";
import Nbar from './components/Nbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
function App() {
  const [mode,setMode] = useState('light');
  const [toggletext,setText] = useState("On Dark Mode")
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background = '#2C3A47';
      setText('Off Dark Mode')
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      setText('On Dark Mode')
    }
  }
  return (
    <>
  <Nbar title="TextUtils.com" mode={mode} toggleMode={toggleMode} toggletext={toggletext}/>
  <Routes >
    <Route path="/" element={<TextForm mode={mode} heading="Enter text here"/>} /> 
    <Route path="/about" element={<About mode={mode}/>}/>    
  </Routes>
   </>
  );
}

export default App;