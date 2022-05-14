import { faCoffee,faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Steps.css';

const Steps = (props) => {
    const {name,description,img} = props.step;
    // const {icon} = props;
    // const element =<FontAwesomeIcon icon={ faBook } />
    return (
        <div className='steps-container col'>
            <div className='img'>
                <img src={img} alt="" />
            </div>
            {/* <div>
                {icon}
            </div> */}
            <div className='steps-div'>
                <h5>{name}</h5>
                <p>{description}</p>

            </div>

             
        </div>
    );
};

export default Steps;