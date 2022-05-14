import React from 'react';
import './Footer.css';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faChartPie, faEnvelope, faHouseChimney, faSignal  } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const icon1 =<FontAwesomeIcon className='icon-style' icon={  faChartPie } />
    const icon2=<FontAwesomeIcon className='icon-style' icon={faHouseChimney} />
    const icon3=<FontAwesomeIcon className='icon-style' icon= {faEnvelope} />
    const icon4=<FontAwesomeIcon className='icon-style' icon= {faSignal} />
     
    return (
        <div>
            <div className='footer-container'>
            <div> 
            <h2 className='head'>{icon1} Emerald Online School</h2>
                
                <p>Our Team</p>
                <p>Contact Us</p>
                <p>Services</p>

            </div>
            <div>
                <h2 className='head'>About</h2>
                <p>The biggest advantage of our online course is that our classroom and instructor (theoretically) are available 24 hours a day, seven days a week.Your only excuse for missing class is not getting online! Otherwise, everything is available to you. You can get announcements, access notes, review assignments, take practice quizzes, discuss questions, chat with fellow students and study any time you want. Other than certain due dates, you make your own schedule for completing the requirements of the course. </p>
            </div>
            

            <div>
            <h2 className='head'>Our Services</h2>
            <p>{icon2}   Road#02,Sector#1,Uttara-Dhaka,Bangladesh</p>
            <p>{icon3}   em123@gmail.com</p>
            <p>{icon4}   Available:Mon-Sat(10:00PM-4:00PM)</p>
             

            </div>
            
        </div>
        <div>
        <h6 className='copyright'>©copyright2022 All rights reserved</h6>
        </div>
        </div>
    );
};

export default Footer;