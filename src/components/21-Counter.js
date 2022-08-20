import React, { useState } from 'react'
import { ButtonGroup, Button } from "react-bootstrap"
const Counter = () => {

    const [Count, setCount] = useState(0)
   

   const handleIncrease=(ctn)=>{
    if(ctn <0 || ctn >100)  return;
    setCount(ctn)

   }
    return (


        <div className='text-center'>
            <ButtonGroup aria-label="Basic example" className='m-5'>
                <Button variant="success" onClick={()=> handleIncrease(Count+1)}>+</Button>
                <Button variant="secondary">{Count}</Button>
                <Button variant="warning"onClick={()=> handleIncrease(Count-1)}>-</Button>
                <Button variant="info"onClick={()=> handleIncrease(0)}>Reset</Button>
            </ButtonGroup>

        </div>

    )
}

export default Counter