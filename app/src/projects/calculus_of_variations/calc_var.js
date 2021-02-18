import React from 'react'
import Jumbotron from '../../components/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import calc_var_pdf from '../../projects/calculus_of_variations/calculus_of_variations.pdf';
import styled from 'styled-components';

const Styles = styled.div`
  .description {
    padding-left: 15px;
    padding-right: 200px;
  }
`

function calc_var() {
  return (
    <React.Fragment>
        <Styles>
        <Jumbotron initial_title="Notes on the Calculus of Variations" 
                  main_title="" 
                  overlay="default_overlay"
                  overlay2="projects_overlay" />
        <Container fluid='sm'>
          <Row>
             <ul> <li> <a href={calc_var_pdf}>PDF of Notes</a> </li> </ul>
          </Row>
          <Row className='description'>
            <p>
              These are some notes I took and problems I solved while taking a reading course covering the calculus of variations.
              The notes are mostly adapted from the seminal text by Gelfand and Fomin, with various other sources also consulted.
              These notes are by no means a complete treatise on the subject, and they certainly require some maintenance and organizing;
              in particular, the induction proofs written in section 9, they require some corrections that I will
              get to at a later time.
            </p>
          </Row>
        </Container>
      </Styles>
    </React.Fragment>
  )
}

export default calc_var
