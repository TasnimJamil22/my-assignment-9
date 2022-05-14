import React from 'react';
import './WhyChoose.css';
 
const WhyChoose = (props) => {
    const {name,detail,img} = props.wc;
    console.log(props);
    return (
         
           <div className='whyChoose-container'>
             <div className='whyChoose-img'>
                 <img src={img} alt="" />
             </div>
             <div>
                 <h4>{name}</h4>
                 <p>{detail}</p>
             </div>
         </div>  
            
         
    );
};

export default WhyChoose;