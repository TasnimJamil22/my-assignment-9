import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = (props) => {
     
    const {id,name,img} = props.category;
    const url = `/category/${id}`;
    return (
        <div>
            <div className='category-container '>
            <img   src={img} alt="" />
            <h3>{name}</h3>
            <button className='btn-category'>View Courses</button>
            <Link to={url}>Visit me...</Link>
            </div>

        </div>
    );
};

export default Category;