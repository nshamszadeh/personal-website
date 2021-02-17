import React from 'react';
import Jumbotron from './components/Jumbotron';
import styled from 'styled-components';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Styles = styled.div`
  .column {
    color: #fff;
    background-color: #000;
    border: 1px;
    padding: 10px;
    margin-left: 5px;
    margin-right: 5px;
    text-align: center;
    font-size: large;
  }
  .row {
    background-color: #000;
  }
  .item {
    background-color: #000;
    color: #fff;
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
          <Row className='row'>
            <Col className='column'>
              Notes and Papers
              <ListGroup variant='flush'>
                <ListGroup.Item action href='./projects/calculus_of_variations/calc_var' className='item'>Calculus of Variations</ListGroup.Item>
              </ListGroup>
              
            </Col>
            <Col className='column'>
              Software
              <ListGroup variant='flush'>
                <ListGroup.Item action href='./projects/particles/particles' className='item'>Particle Simulator</ListGroup.Item>
                <ListGroup.Item action href='./projects/earthquakes/earthquake_project' className='item'>Earthquake Tracker</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Styles>
    </React.Fragment>
  )
}

export default Projects
