
import React, { useState } from 'react';
import './App.css';
import UserForm from "./components/UserForm"
import FormData from "./components/FormData"

function App() {

  const [users, setUsers] = useState([])

  return (
    <div className="App container">
      <UserForm users={users} setUsers={setUsers} />
      <FormData inputs={users}></FormData>
    </div>
  );
}

export default App;