import React from 'react';
import './App.css';
import Form from "./Components/Form"
import Mode from "./Components/Mode"

function App() {
  return (
    <div className="App">
        <h3>click to switch to the modes</h3>
        <Mode/>
        <Form/>
    </div>
  );
}

export default App;
