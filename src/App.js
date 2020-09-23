import React from 'react';
import './App.css';
import ViewWindow from './components/viewComponent'
import KeyPad from './components/input'

function App() {
  return (
    <div className="App">
      <ViewWindow result="Hi"/>
      <KeyPad></KeyPad>
    </div>
  );
}

export default App;