import React from 'react'
import Jumbotron from '../../components/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import analysis_pdf from './analysis.pdf'

const Styles = styled.div`
  .description {
    padding-left: 15px;
    padding-right: 20px;
  }
`

function analysis() {
  return (
    <React.Fragment>
        <Styles>
        <Jumbotron initial_title="Notes on Mathematical Analysis" 
                  main_title="" 
                  overlay="default_overlay"
                  overlay2="projects_overlay" />
        <Container fluid='sm'>
          <Row>
             <ul> <li> <a href={analysis_pdf}>PDF of Notes</a> </li> </ul>
          </Row>
          <Row className='description'>
            <p>
              These are some notes I took and problems I solved while taking real analysis in university. I decided early on to 
              write my notes and problems in LaTeX, and by the end of the school year I had over 40 pages of notes. The notes themselves come 
              from Priciples of Mathematical Analysis by Walter Rudin; however, most of the problems are unique and hard to come by from
              other sources (they are also very interesting!). As of now the notes and problems are not completely organized as this 
              is an ongoing project of mine. There are over 40 pages thus far and many more to be added before I am satisfied. 
              I also plan on revising some of the proofs for better clarity. For now, I am posting the notes and updating them as I 
              work through them.
            </p>
          </Row>
        </Container>
      </Styles>
    </React.Fragment>
  )
}

export default analysis
