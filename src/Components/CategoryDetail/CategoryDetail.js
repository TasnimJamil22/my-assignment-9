import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetail = () => {
    const {categoryId}= useParams();
    // console.log(id);
     
    return (
        <div>
         <h1>Let's study together..{categoryId}</h1>

        </div>
    );
};

export default CategoryDetail;