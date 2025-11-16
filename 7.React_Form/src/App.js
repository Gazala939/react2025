import React from 'react';
import { useState } from "react"
import './App.css'
function App() {
    const [register, setRegister] = useState({
        fname:"",
        lname:"",
        email:"",
        mobile:""
    });
   

    const [finalName,setFinalName] = useState('');
    const [other,setOther] = useState('');
   
    
    const InputEvent =(event)=>{
        const {name,value} =event.target;

        setRegister((preValue)=>{
            //console.log("Prev value =", preValue)
            return{
                ...preValue,
                [name]:value
            }
        });
    }
    const showResult=(event) =>{
        event.preventDefault();    
        setFinalName(register.fname+" "+register.lname);
        setOther(register.email+" "+ register.mobile)
        //console.log("full name =",register)
    };

    const clearText = ()=>{
        setRegister({
            fname:"",
            lname:"",
            email:"",
            mobile:""
        });
        setFinalName('');
        setOther('')
      
    }
 
  return (
    <>
    <form onSubmit = {showResult}>
    <div>
      <h1> Welcome {finalName}</h1>
      <h5>{other}</h5>

      <input 
      type ="text"
      placeholder ="Enter First name"
      onChange={InputEvent}
      name = "fname"
      value={setRegister.fname}>
      </input>
      <br></br>
      <br></br>

      <input 
      type ="text"
      placeholder ="Enter Last name"
      onChange={InputEvent}
      name = "lname"
      alue={setRegister.lname}>
      </input>
      <br></br>
      <br></br>

      <input 
      type ="email"
      placeholder ="Enter Email Id"
      onChange={InputEvent}
      name = "email"
      value={setRegister.email}>
      </input>
      <br></br>
      <br></br>

      <input 
      type ="number"
      placeholder ="Enter Mobile Number"
      onChange={InputEvent}
      name = "mobile"
      value={setRegister.mobile}>
      </input>
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
