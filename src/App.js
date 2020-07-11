import React, { useState } from 'react';
import './App.css';
import BoxForm from "./components/BoxForm.js";
import Box from "./components/Box.js";

function App() {

  const [users, setUsers] = useState([]);

  const [boxes, setBoxes] = useState([]);

  return (
    <div className="App container">
      <BoxForm boxes={boxes} setBoxes={setBoxes}></BoxForm>
      {boxes.map((box, idx) => {
        return (<Box key={idx} box={box} />)
      })}
    </div>
  );
}

export default App;