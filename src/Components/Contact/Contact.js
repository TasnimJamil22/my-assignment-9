import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import './Contact.css';
 

const Contact = () => {
    return (
        <div className='mx-5'>
            <h1 className='contact-heading'>Contact Us</h1>
            <div className='contact-container'>
                <div>
                    <h4>+0110101010104040</h4>
                    <p>free support</p>
                </div>
                <div>
                    <h4>Mon-Sat(10:00PM-4:00PM)</h4>
                     <p>working hours</p>
                </div>
                <div>
                    <h4>Road#02,Sector#1,Uttara</h4>
                   <p>Dhaka,Bangladesh</p>
                </div>
                <div>
                    <h4>em123@gmail.com</h4>
                    <p>support us</p>
                </div>
            </div>
            {/* <Container>
             
              <Row xs={1} md={1} lg={2} className='contact-row gy-5'>
              
                <Col className='container-col1      '>
                     
                    <h4>+0110101010104040</h4>
                    <p>free support</p>
                    
                    
                </Col>
                <Col className='container-col2  md={4}   '>
                   <h4>Mon-Sat</h4>
                   <p>working hours</p>
                </Col>
                  <Col className='container-col3 md={4}  '>
                   <h4>Road#02,Sector#1,Uttara</h4>
                   <p>Dhaka,Bangladesh</p>
                  </Col>
                  <Col className='container-col4    md={4} '>
                  <h4>emeraldOnline@gmail.com</h4>
                  <p>support us</p>
                  </Col>
                  
              </Row>
               
            </Container> */}
             
        </div>
    );
};

export default Contact;