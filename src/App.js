import React, { useState } from 'react';
import './App.css';
import ViewWindow from './components/viewComponent'
import KeyPad from './components/input'

function App() {
  const [result, setResult] = useState("")

  const buttonPressed = btnName => {
    if(btnName === "="){
      calculate()
    }else if(btnName === "CE"){
      setResult("")
    }else{
      setResult(result + btnName)
    }
  }

  const calculate = () => {
    setResult(eval(result))
  }

  return (
    <div className="App">
      <ViewWindow result={result}/>
      <KeyPad buttonPressed={buttonPressed}/>
    </div>
  );
}

export default App;