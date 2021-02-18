import React from 'react'
import styled from 'styled-components';
import Jumbotron from './components/Jumbotron';
import Container from 'react-bootstrap/Container';
import resume from './resume.pdf';

const Styles = styled.div`
  .title {
    font-weight: normal;
    background-color: #000;
    color: #fff;
  }
  .cont {
    background-color: #000;
  }
`

export default function Home() {
  return (
    <React.Fragment>
      <Jumbotron initial_title="Hi, I'm" main_title="Navid Shamszadeh" overlay="home_overlay" />
      <Container fluid='lg' className='cont'>
        <Styles>
          <div>
            <p>
              I am a recent graduate in computer science and mathematics. 
              This website is mostly used as a portfolio of personal projects.
              <strong> For information on my academic and professional experience, refer to my <a href={resume}>resume</a> </strong>.

            </p>
          </div>
        </Styles>
      </Container>
    </React.Fragment>
  )
}