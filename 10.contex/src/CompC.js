import React from 'react'
import {FirstName} from './App'
import {LastName} from './App'
import { useContext } from 'react'

const CompC = () => {
    const context1 = useContext(FirstName);
    const context2 = useContext(LastName);



  return ( 
    <>
     <div>
        CompC:{context1} {context2}
    </div>
    </>
  )
}

export default CompC
