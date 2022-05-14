import React from 'react';
import './OurTeam.css'

const OurTeam = (props) => {
    const {img,name,detail} = props.team;
    return (
        <div className='team-container'>
             
        <div className='team-img'>
            <img src={img} alt="" />
        </div>
        <div>
            <h4>
                {name}
            </h4>
            <h6>{detail}</h6>
        </div>
  </div>
        
    );
};

export default OurTeam;