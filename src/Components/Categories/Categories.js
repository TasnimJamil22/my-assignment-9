import React from 'react';
import './Categories.css';
import Category from '../Category/Category';

const Categories = () => {
    const categories = [
        {id:'1',name:'English Learning',img:'https://thumbs.dreamstime.com/z/design-can-be-used-as-logo-icon-as-complement-to-design-lamp-education-logo-icon-design-129052351.jpg'},
        {id:'2',name:'Class one to ten',img:'https://as1.ftcdn.net/v2/jpg/02/37/30/02/1000_F_237300214_inXh3nwh3BijMhQEHBsET8ogIQa9xgXV.jpg'},
        {id:'3',name:'Skill Development',img:'https://static.vecteezy.com/system/resources/previews/001/918/976/non_2x/ability-icon-line-on-white-vector.jpg'},
        {id:'4',name:'Kids Zone',img:'https://png.pngtree.com/template/20190316/ourmid/pngtree-kids-logo-image_79551.jpg'},
        {id:'5',name:'Science',img:'https://us.123rf.com/450wm/andiasmara/andiasmara1706/andiasmara170600112/81930221-lab-logo.jpg?ver=6'}
    ]
    return (
        <div className='main-div'>
            <h1>Categories</h1>
            <div className='categories-container'>
            {
                 categories.map(category=> <Category
                 key={category.id}
                 category={category}
                 ></Category>)
            }
            </div>
        </div>
    );
};

export default Categories;