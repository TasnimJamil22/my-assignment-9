import React from 'react';
import './HowItWork.css';

const HowItWork = (props) => {
    const {name,detail,img} = props.howItWork;
    // console.log(props.howItWorks.detail);
    return (
        <div className='container '>
            
            <div className='howItWork-img'>
            <img src={img} alt="" />
            </div>
            <div className='div'>
            <h4>{name}</h4>
            <p>{detail}</p>
            </div>
        </div>
    );
};

export default HowItWork;