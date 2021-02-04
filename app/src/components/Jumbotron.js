import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap'; // explicitly exported from react-bootstrap
import styled from 'styled-components'; // default import 

const Styles = styled.div`
  .jumbo {
    background-color: #fff;
    height: 200px;
    position: relative;
    z-index: -2;
  }
`


export default function Jumbotron() {
  return (
    <Styles>
      <Jumbo fluid className='jumbo'>
      <div className='overlay'>
      <Container>
      <h1>Welcome</h1>
      </Container>
      </div>
      </Jumbo>
    </Styles>
  )  
}