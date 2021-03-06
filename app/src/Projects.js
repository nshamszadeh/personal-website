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
    font-size: 175%;
    white-space: pre;
  }
  .row {
    background-color: #000;

  }
  .item {
    font-size: 60%;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    :hover {
      color: violet;
    }
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
              <u>          Papers          </u>
              <ListGroup variant='flush'>
                <ListGroup.Item action href='./projects/calculus_of_variations/calc_var' className='item'>Calculus of Variations</ListGroup.Item>
                <ListGroup.Item action href='./projects/analysis/analysis' className='item'>Mathematical Analysis</ListGroup.Item>
              </ListGroup>
              
            </Col>
            <Col className='column'>
              <u>           Software          </u>
              <ListGroup variant='flush'>
                <ListGroup.Item action href='./projects/erase_objects/erase_objects' className='item'>Detect and Erase Objects with AI</ListGroup.Item>
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
