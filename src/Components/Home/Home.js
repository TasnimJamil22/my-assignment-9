import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faBook } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Steps from '../Steps/Steps';
import './Home.css';
import Categories from '../Categories/Categories';
// import HowItWorks from '../HowItWorks/HowItWorks';
import HowItWork from '../HowItWork/HowItWork';
import WhyChoose from '../WhyChoose/WhyChoose';
import Faq from '../Faq/Faq';

const Home = () => {
    const icon =<FontAwesomeIcon className='home-icon' icon={ faBook } />
    const steps = [
        {id:'1',name:'Learn Anything',description:'Learn different topic from one site and make it easy',img:'https://thumbs.dreamstime.com/b/open-book-pencil-set-books-icon-vector-open-book-pencil-set-books-icon-vector-illustration-flat-style-white-147030770.jpg'},
        {id:'2',name:'Best Courses',description:'Choose courses that are best for you',img:'https://cdn.pixabay.com/photo/2016/09/16/09/20/books-1673578_1280.png' },
        {id:'3',name:'Certified',description:'By finishing quizes can anyone get certificate.',img:'https://thumbs.dreamstime.com/b/diploma-sign-icon-certificate-diploma-color-symbol-white-background-simple-vector-icon-diploma-sign-icon-certificate-diploma-123624454.jpg'},

    ]
     
    const whyChoose = [
        { id:'1',name:'Expert Faculties',detail:'All the members of a profession or the group of teachers at a specific educational organization.',img:'https://thumbs.dreamstime.com/b/print-176332763.jpg'},
        { id:'2',name:'Download Audio Lessons',detail:'Audio Lessons strategically prepare you to have real conversations about common topics. ',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAEqJHpoTgzd996eGRO9DCWBVsOIsdnE8FWw&usqp=CAU'},
        { id:'3',name:'Trused Certifications',detail:'Trusted certificates can be used to create secure connections to a server via the Internet.',img:'https://www.nicepng.com/png/detail/30-309995_checkboxes-in-google-sheets-checkbox.png'},
        { id:'4',name:'Download Vedio Lessons',detail:'Videos increase student engagement, which in turn helps boost achievement.',img:'https://www.vbazz.com/upload/1610979044-1525017246.jpg'}
    ]

    const howItWorks = [
        {id:'1',name:'Register', detail:'Keeping an  Register. A schools records are important for effective management.',img:'https://media.istockphoto.com/vectors/vector-key-icon-secret-safe-symbol-for-design-web-site-design-logo-vector-id1147274424?k=20&m=1147274424&s=170667a&w=0&h=xSuReCNak7UAZI0xgddEeJwMihZxW8e2FpmRQXHB_G4='},
        {id:'2',name:'Create Account', detail:'Create your account in this website.',img:'https://thumbs.dreamstime.com/b/user-icon-person-profile-sign-vector-avatar-user-icon-person-profile-sign-vector-avatar-illustration-124240309.jpg'},
        {id:'3',name:'Start Courses', detail:'You can choose your Courses and study well.',img:'https://media.istockphoto.com/vectors/training-black-vector-icon-conference-meeting-presentation-business-vector-id1215198238?k=20&m=1215198238&s=170667a&w=0&h=yuWvtKOddncPOAIWs_47mkYlBH4tcxCLF0c0nNc8CKM='},
        {id:'4',name:'Get Certificate', detail:'Getting a certificate.After finishing, you can get it.',img:'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1809/pavelstasevich180900036/109036188-medal-icon-trophy-symbol-vector-illustration-flat-design-.jpg'}
    ]
    return (
        <div className='div'>
             
             <div className='home-container '>
                  
             {
                steps.map(step=> <Steps 
                    key={step.id}
                    step={step}
                    icon={icon}></Steps>)
             
             }
              
             </div>
             <div className='whyChoose-div'>
               <div>
                   <h1>Why Chosse <span className='span'>the Course?</span></h1>
                   <p>An inspiration needs to study better.and here it is ..</p>
               </div>
                <div className='whyChoose'>
                {
                    whyChoose.map(wc => <WhyChoose
                    key={wc.id}
                    wc={wc}
                    ></WhyChoose> )
                }
                </div>
            </div>

             <div className='main-container' >
             <div className='works-heading'>
             <h1 >How it Works?</h1>
             <p>Working steps are very useful for everyone who has started our courses</p>
                
             </div>

            

            <div className='howItWork-container' >
            {
                howItWorks.map(howItWork => <HowItWork
                key={howItWork.id}
                howItWork={howItWork} ></HowItWork> )
            }
            </div>
            </div>
            <div>
                <Faq></Faq>
            </div>
             
        </div>
    );
};

export default Home;