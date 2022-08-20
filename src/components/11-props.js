import React from 'react'

const Props = (props) => {
const {user}= props
   
  return (
    <div>Hi My name is {user.name} I am From {user.country} I am {user.age} year old</div>
  )
}

export default Props