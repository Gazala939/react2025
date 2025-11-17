import React from 'react';
import { useState } from 'react';
import './App.css'
import List from "./List";

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
    };

    const deleteItem =(id)=>{
        console.log("delete Item :",id);
        setList((oldItems)=>{
            return oldItems.filter((val,index)=>{
                return index !== id

            })
        })
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
                    return <List key={index} text={val}  delete={deleteItem} id={index}></List>
                })
               }
            </ol>
            
        </div>
    </div>
  );
}

export default App;
