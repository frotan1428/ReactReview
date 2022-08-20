import React from 'react'

const ImageParacice = () => {

    const data =[
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        
        
    ]
  return (
  <div>
     {
         data.map(item=>  <img key={item} src={require(`../assets/img/${item}`)}/>)
    }
  </div>
     
   
  )
}

export default ImageParacice