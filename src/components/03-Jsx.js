import React from 'react'

const MyJsx = () => {

    const isAdmin=true;
  return (

    <div>
       
      {
        isAdmin ? ( 
        <div>
            <h1>admin</h1>
                <ul>
                <li>Create user </li>
                <li>Update user </li>
                <li>Delate user </li>
                </ul>
        </div>
        ):(
     <>
 <h1>costomer</h1> 
     <ul>
        <li>Create user </li>
        <li>Update user </li>
        <li>Delate user </li>
    </ul>
    
     </>
     
     
     )}
   
    </div>
  )
}

export default MyJsx