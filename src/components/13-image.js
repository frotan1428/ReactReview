import React from 'react'
import photo from "../assets/img/image1.jpg"
const Image = () => {
  return (
    <div>
        <img src={photo} alt=""/>
        <img src={require("../assets/img/image3.jpg")} alt="" />
    </div>
  )
}

export default Image