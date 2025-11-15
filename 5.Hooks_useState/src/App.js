import React from 'react';
import './app.css';
import{ useState} from 'react'
function App() {
    let [counter,setCounter] = useState(0);

    const buttonEvent = () => {
        counter = counter +1;
        setCounter(counter);   ///assign new value counter
        console.log('Button Click :',counter);
    }
  return (
    <>
      <h1> {counter}</h1>
      <button onClick = {buttonEvent}> Click Me</button>
    </>
  );
}

export default App;

