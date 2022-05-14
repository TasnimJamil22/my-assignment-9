import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';
import img from  './bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faCertificate, faChartPie } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const icon =<FontAwesomeIcon className='header-icon' icon={  faChartPie } />
     
    return (
        <div className='header'>
             
             <div className='img-fluid' 
                 style={{ 
                   backgroundImage: `url(${img})` ,
                   backgroundRepeat: 'no-repeat',
                   backgroundSize: 'cover',
                   height:'600px'
              }}>

            
            <h1 className='site-title'>{icon}Emerald Online School</h1>
               
            <nav className='nav-style'>
            <div className='nav-div'>
            <Link to='/home'>Home</Link>
            <Link to='/categories'>Category</Link>
            <Link to='/about' >About</Link>
            <Link to='/contact' >Contact</Link>
            </div>
            </nav>
             
            {/* <input type="text" placeholder='search your lessons here'/> */}
            {/* <Button variant='primary' className='btn-regular'>Search</Button> */}
            <InputGroup className="w-50 p-3  btn-regular" >
               <FormControl 
                   placeholder="Search Your Lessons here..."
               />
              <Button variant="outline-secondary" id="button-addon2">
                    Search
              </Button>
           </InputGroup>
           </div>
        </div>
    );
};

export default Header;