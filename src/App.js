import React, { useState } from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import UserForm from './components/UserForm';
import FormData from './components/FormData';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });

  return (
    <>
      <UserForm inputs={state} setInputs={setState}></UserForm>
      <FormData inputs={state}></FormData>
    </>
  );
}

export default App;
