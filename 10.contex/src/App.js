import React from 'react';
import CompA from './CompA';
import { createContext } from 'react'

const FirstName = createContext()
const LastName = createContext()
function App() {  
  return (
    <>
    <div> App Component</div>
    <FirstName.Provider value={'Sara'}>
        <LastName.Provider value={'Ali'}>
        <CompA  />
        </LastName.Provider>
    </FirstName.Provider>
    </>
  )
}

export default App;
export {FirstName}
export {LastName}
