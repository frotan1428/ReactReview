import React from 'react'
import "../assets/css/10-Clock.css"

import moment from 'moment'
const Clock1 = () => {
const dateTime=moment();
const dateStr=dateTime.format("ll");
const date= dateTime.format("HH:mm")
const day= dateTime.format("dddd");
const hour = dateTime.format("HH");


 let message="";
  if(hour>=6 && hour<=10){
    message="Morning"
  }else if(hour>=11 && hour<=17){
    message="Afternoon"
  }else if (hour >=18 && hour <= 21){
    message =" Evining"
  }else{
    message=" night"
  }

  return (
    <div className='clockContainer'>

     <div className='time'>{date}</div>
     <div>
        <div className='date'>{dateStr}</div>
        <div className='day'>{day} {message}</div>
     </div>
      
    </div>
  )
}

export default Clock1