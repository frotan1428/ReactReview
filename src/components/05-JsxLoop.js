import React from 'react'

const JsXloop = () => {


    const arr=["ali","khan","ayse","salim"];
  return (
    <div>
        {
            arr.map(item=> <li>{item}</li>)
        }
    </div>
  )
}

export default JsXloop