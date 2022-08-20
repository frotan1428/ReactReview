import React from 'react'
import   '../assets/css/16-prfile-card.css'

const ImageCard = (props) => {

    const img = require(`../assets/img/${props.avatar}`);

    const profileBg = { backgroundImage: `url(${img})` };
  
  return (
    <div className='profile-card'>
        <div className='prfile-bg' style={profileBg}>
            <div className='profile-trans'></div>

        </div>
        <div className='profile-content'>
            <div className='profile-avatar'>
                <img src={img} alt=""/>

            </div>
            <h1>{props.name}</h1>
            <h6>{props.location}</h6>

            <div className='profile-status'>
                <div>
                    {props.shot}
                    <span>shot</span>
                </div>
                <div>
                    {props.Followers}
                    <span>Followers</span>
                </div>
                <div>
                    {props.Followings}
                    <span>Follwings</span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ImageCard