import React from 'react';
import { useState } from 'react';
import './App.css'
function App() {
    const[item,setItem] = useState(' ');
    const [list,setList] = useState([])

    const itemEvent=(event) =>{
        setItem(event.target.value)

    }
    const addItem =()=>{
        setList((oldItems)=>{
            return[...oldItems,item]
        });

        setItem('');
    }
  return (
    <div className = 'main-div'>
        <div className = 'center-div'>
            <br></br>
            <h1> To Do List</h1>
            <br></br>
            <input type = "text" 
            placeholder="Add a Item" 
            onChange={itemEvent}
            value={item}>
            </input>
            <button onClick = {addItem}>+</button>
            <ol>
               {
                list.map((val,index)=>{            
                    return <li key={index}>{val}</li>
                })
               }
            </ol>
            
        </div>
    </div>
  );
}

export default App;
