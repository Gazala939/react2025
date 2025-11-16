import React from 'react';
import { useState } from "react"
function App() {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    
    const InputEvent1 =(event)=>{
        setFName(event.target.value);
    }
    const InputEvent2 =(event)=>{
        setLName(event.target.value);
    }
    const showResult=(event) =>{
        event.preventDefault();    
        setFirstName(fname);
        setLastName(lname);
    };

    const clearText = ()=>{
        setFName('');
        setFirstName('');
        setLName('');
        setLastName('');
    }
 
  return (
    <>
    <form onSubmit = {showResult}>
    <div>
      <h1> Welcome {firstName} {lastName}</h1>

      <input 
      type ="text"
      placeholder ="Enter First name"
      onChange={InputEvent1}
      name = "firstName"></input>
      <br></br>
      <br></br>

      <input 
      type ="text"
      placeholder ="Enter Last name"
      onChange={InputEvent2}
      name = "LastName"></input>
      <br></br>

      <br></br>
      <button type="submit">Click Me</button>
      <button type = "reset" onClick={clearText}>Clear Text</button>
      </div>
      </form>
    </>
  );
}

export default App;
