import React, { useState } from 'react';
import './App.css';

import BoxForm from "./components/BoxForm";
import Box from "./components/Box";

function App() {
  const [boxes, setBoxes] = useState([])

  return (
    <div className="App container">
      <BoxForm boxes={boxes} setBoxes={setBoxes} />
      {boxes.map((box, i) => (
        <Box key={i} box={box} />
      ))}
    </div>
  );
}

export default App;