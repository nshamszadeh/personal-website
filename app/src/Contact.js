import React from 'react';
import Jumbotron from './components/Jumbotron';
import Container from 'react-bootstrap/Container';
function Contact() {
  return (
    <React.Fragment>
      <Jumbotron initial_title="Contact Me" main_title="" overlay="default_overlay" />
      <Container>
      <div>
        <h2>Contact</h2>
        <p>Lorem Ipsum blahblahblahblah</p>
      </div>
      </Container>
    </React.Fragment>
  )
}

export default Contact
