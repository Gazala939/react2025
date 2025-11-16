import React from 'react';
import {useState} from "react"
function App() {
    let [dateTime,setDateTime] = useState(new Date().toLocaleTimeString());

    const updateTime =() =>{
        console.log("Button Click");
        let newDateTime = new Date().toLocaleTimeString();
        setDateTime(newDateTime);

        setInterval(updateTime,100);
    }
  return (
    <>
      <h1> {dateTime}</h1>
      <button onClick = {updateTime}>Live Clock</button>

    </>
  );
}

export default App;
