import React from 'react';
import Jumbotron from './components/Jumbotron';
import styled from 'styled-components';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import calc_var from './documents/calculus_of_variations.pdf';

const Styles = styled.div`
  .column {
    border: 1px solid grey;
    padding: 10px;
    margin-left: 5px;
    margin-right: 5px;
    text-align: center;
    font-size: large;
  }
`

function Projects() {
  return (
    <React.Fragment>
        <Styles>
        <Jumbotron initial_title="Projects" 
                  main_title="Here are some projects I have worked on throughout my academic and professional life." 
                  overlay="default_overlay"
                  overlay2="projects_overlay" />
        <Container fluid>
          <Row>
            <Col>
            </Col>
            <Col className='column'>
              Notes and Papers
              <ListGroup variant='flush'>
                <ListGroup.Item action href={calc_var} variant='light'>Calculus of Variaitons</ListGroup.Item>
              </ListGroup>
              
            </Col>
            <Col className='column'>Software</Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </Styles>
    </React.Fragment>
  )
}

export default Projects
