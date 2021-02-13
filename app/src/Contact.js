import React from 'react';
import Jumbotron from './components/Jumbotron';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Styles = styled.div`
 .contact {
    line-height: 200%;
  }
`

function Contact() {
  return (
    <React.Fragment>
      <Styles>
        <Jumbotron initial_title="Contact Me" main_title="" overlay="default_overlay" />
        <Container>
        <div className='contact'>
          Email: <a href="mailto:nshamszadeh@gmail.com">nshamszadeh@gmail.com</a>
        </div>
        <div className='contact'>
          Phone: (831)-229-6672
        </div>
        <div className='contact'>
          LinkedIn: <a href="https://www.linkedin.com/in/navid-shamszadeh-7217bb159/">linkedin.com/in/navid-shamszadeh-7217bb159/</a>
        </div>
        </Container>
      </Styles>
    </React.Fragment>
  )
}

export default Contact
