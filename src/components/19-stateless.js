import React from 'react'

const StateLess = () => {

    let counter =10;

    const add = () => { 
        counter++;
      document.querySelector("b").innerHTML=counter;
      // bu orikte state kullinlmadi
    }

  return (
    <div>
         <b>{counter}</b>
         <button onClick={add}>add</button>
    </div>
  )
}

export default StateLess