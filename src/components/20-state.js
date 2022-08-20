import React, { useState } from 'react'

const State = () => {
         const [counter ,setCounter] = useState(0);

    const add = () => { 
       setCounter(counter+2)
    }

  return (
    <div>
         <b>{counter}</b>
         <button onClick={add}>add</button>
    </div>
  )
}

export default State