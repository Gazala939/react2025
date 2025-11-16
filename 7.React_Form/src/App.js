import React from 'react';
import { useState } from "react"
function App() {
    const [name, setName] = useState('')
    const [firstName,setFirstName] = useState('')
    
    const InputEvent =(event)=>{
        console.log('Event call :', event.target.name,event.target.value);
        setName(event.target.value);
    }
    const showResult=(event) =>{
        event.preventDefault();    
        setFirstName(name);
    };
 
  return (
    <>
    <form onSubmit = {showResult}>
    <div>
      <h1> Welcome {firstName} </h1>
      <input type ="text"
      placeholder ="Enter ur name"
      onChange={InputEvent}
      name = "firstName"></input>
      <br></br>
      <br></br>
      <button type="submit" /*onClick={showResult}> */>Click Me</button>
      <button type = "reset">Clear Text</button>
      </div>
      </form>
    </>
  );
}

export default App;
