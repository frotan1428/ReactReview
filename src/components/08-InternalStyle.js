import React from 'react'

const IntenalStyle = () => {
    const style={
      color:"white",
      backgroundColor:"blue",
      padding:10
    }
  return (
    <div>
        <h2 style={style}>Hello Wolrd!</h2>
        <h3 style={{...style,color:"red"}}>Hello Wolrd!</h3>
    </div>
  )
}

export default IntenalStyle

