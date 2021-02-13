import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap'; // explicitly exported from react-bootstrap
import styled from 'styled-components'; // default import 

const Styles = styled.div`
  .jumbo {
    background-color: #fff;
    height: 150px;
    position: relative;
    z-index: -2;
    padding: 25px;
  }
  .home_overlay {
    font-weight: lighter;
    margin-top: 0px;
  }

  .default_overlay {
    margin-top: 0px;
  }

  .projects_overlay {
    margin-top: 25px;
    margin-bottom: 25px;
    font-weight: normal;
    font-size: 125%;
    line-height: 150%;
  }
`


export default function Jumbotron(props) {
  return (
    <Styles>
      <Jumbo fluid className='jumbo'>
      <div className='overlay'>
      <Container>
      <h2 className={props.overlay}>{props.initial_title}</h2>
      <h2 className={props.overlay2}>{props.main_title}</h2>
      </Container>
      </div>
      </Jumbo>
    </Styles>
  )  
}