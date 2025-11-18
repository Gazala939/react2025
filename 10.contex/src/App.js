import React from 'react';
import CompA from './CompA';
import { createContext } from 'react'

const FirstName = createContext()
function App() {  
  return (
    <>
    <div> App Component</div>
    <FirstName.Provider value={'Sara'}>
        <CompA  />
    </FirstName.Provider>
    </>
  )
}

export default App;
export {FirstName}
