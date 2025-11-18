import React from 'react';
import CompA from './CompA';
import { createContext } from 'react'

const FirstName = createContext()
const LastName = createContext()
function App() {  
  return (
    <>
    <div> App Component</div>
    <FirstName.Provider value={'Adiba'}>
        <LastName.Provider value={'M'}>
        <CompA  />
        </LastName.Provider>
    </FirstName.Provider>
    </>
  )
}

export default App;
export {FirstName}
export {LastName}
