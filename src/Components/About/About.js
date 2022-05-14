import React from 'react';
import OurTeam from '../OurTeam/OurTeam';
import './About.css';
import img from './v960-ning-30.jpg';

const About = () => {
    const teams =[
        {id:'1',name:'prof. Mitchell',detail:'Assistant Professor',img:'https://previews.123rf.com/images/yupiramos/yupiramos1809/yupiramos180927860/109687364-old-man-with-beard-avatar-character-vector-illustration-design.jpg', },
        {id:'2',name:'prof. Md. Yaqoob',detail:'Course Director',img:'https://previews.123rf.com/images/jemastock/jemastock1709/jemastock170909479/85576396-young-man-cartoon-icon-vector-illustration-graphic-design.jpg'},
        {id:'3',name:' Prof. Zainab ',detail:'Teacher',img:'https://media.baamboozle.com/uploads/images/72742/1607110192_41327'}
        
    ]
    return (
        <div>
            <div className='about-container img-fluid' 
               
               style={{ 
                 backgroundImage: `url(${img})` ,
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: 'cover',
                 height:'900px'
            }}> 
          <div className='about-text'>
          <div>
          <h1>About Us</h1>
          </div>
          <div className='about-p'>
              <h2>Why Emerald Online Learning?</h2>
              <p><b>The biggest advantage of an online course is that your classroom and instructor (theoretically) are available 24 hours a day, seven days a week.</b> Your only excuse for missing class is not getting online! Otherwise, everything is available to you. You can get announcements, access notes, review assignments, take practice quizzes, discuss questions, chat with fellow students and study any time you want. Other than certain due dates, you make your own schedule for completing the requirements of the course.</p>

              <p>You can study any time you want. You can study with whomever you want. You can study wearing anything you want. Online courses give you the flexibility to spend time with work, family, friends, significant others or any other activity you like. You still have to complete the work (and this flexibility can be your downfall; see disadvantages) but for many people, with continually changing work schedules or people who make frequent business trips, parents with small children, students caring for others or whose health prevents them from making it to campus on a regular basis, students whose friends or boyfriend/girlfriend drop in unexpectedly, or for those days when the surf and/or snow is wicked, this method of course delivery can't be beat.</p>

              <p>Online students often find that their family, friends and/or boy-girl-friends get involved in the course. Oftentimes, a student will study with that special someone present. Children may take an interest in the online environment. Parents may look over the shoulder of an online student while they are surfing across the web. In short, everyone in the household gets involved in learning. Having the support of your family and friends makes you more likely to succeed.</p>

              <p>Because you have a direct pipeline to the instructor via e-mail, you can get your questions answered directly. Many students aren't comfortable asking questions in class for fear of feeling stupid. The Internet (hopefully) eliminates that fear (as long as you feel comfortable with the instructor). Many times you think of a question after class or while you are studying. Rather that trying to remember to ask it or forgetting it, you can send an e-mail to the instructor. Your opportunity to learn is enhanced.</p>

               

          </div>
          </div>
      </div>
      {/* meet out team  */}
      <div>
          <div className='teams-container'>
              <h1>Meet Our Team</h1>
              <p>We have some special team members .</p>
          </div>
          <div className='teams'>
              {
                  teams.map(team => <OurTeam
                  key={team.id}
                  team={team}></OurTeam>

                  )
              }
          </div>
      </div>
        </div>
    );
};

export default About;