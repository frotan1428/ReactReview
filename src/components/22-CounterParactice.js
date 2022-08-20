
import React, { useState } from 'react'
import { ButtonGroup, Button,ProgressBar } from "react-bootstrap"
const CounterParactice = () => {

const [Count, setCount] = useState(10)

   const handleIncrease=(ctn)=>{
    if(ctn <0 || ctn >101)  return;
    setCount(ctn)

   }
    return (


        <div className='text-center'>
            <ButtonGroup aria-label="Basic example" className='m-5'>
                <Button variant="success" onClick={()=> handleIncrease(Count+10)}>+</Button>
                <Button variant="secondary">{Count}</Button>
                <Button variant="warning"onClick={()=> handleIncrease(Count-5)}>-</Button>
                <Button variant="info"onClick={()=> handleIncrease(0)}>Reset</Button>
            </ButtonGroup>
            <ProgressBar striped variant="success" now={Count}  label={`${Count}%`}  className="m-3"/>
            <ProgressBar striped variant="danger" now={Count}  label={`${Count}%`}  className="m-3" />


        </div>

    )
}

export default CounterParactice