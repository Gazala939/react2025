import React from 'react';
import './App.css'
function App() {
    
  return (
    <div className = 'main-div'>
        <div className = 'center-div'>
            <br></br>
            <h1> To Do List</h1>
            <br></br>
            <input type = "text" placeholder="Add a Item"></input>
            <button>+</button>
            <ol>
                <li> 6:00am wake Up</li>
                <li> 6:30am youga</li>
                <li> 7:00 breakfast</li>
            </ol>
            
        </div>
    </div>
  );
}

export default App;
