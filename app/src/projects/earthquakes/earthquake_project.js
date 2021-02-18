import React from 'react'
import Jumbotron from '../../components/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
 .description {
    padding-left: 15px;
    padding-right: 20px;
  }
`
function earthquake_project() {
  return (
    <React.Fragment>
      <Styles>
        <Jumbotron initial_title="Earthquake Tracker" 
                  main_title=''
                  overlay="default_overlay"
                  overlay2="projects_overlay" />
        <Container fluid='sm'>
        <Row>
            <ul>
              <li> <a href='https://github.com/ucsb-cs56-f19/proj01-nshamszadeh'>GitHub</a>  </li>
              <li> <a href='https://cs56-f19-proj01-nshamszadeh.herokuapp.com/'>Website</a> </li>
            </ul>
          </Row>
          <Row>
            <Col className='description'>
              <p>
                This is an earthquake tracking web application I built as a final project for a Java class I took in university.
                The application is built with the Java Spring Boot framework and is deployed on Heroku. Thymeleaf templating,
                Bootstrap, and Github OAuth are all implemented features. Users can search for earthquakes by latitude and longitude. 
                The search proximity can also be configured. The API used to fetch earthquake data is the Nominatum API.
              </p>
            </Col>
          </Row>

        </Container>
      </Styles>
    </React.Fragment>
  )
}

export default earthquake_project
