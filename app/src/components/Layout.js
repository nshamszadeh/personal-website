import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Styles = styled.div`
  .layout {
    background-color: #000;
    color: #fff;
    margin: 0px;
  }
`

function Layout(props) {
  return (  
    <Container className='layout'>
      {props.children}
    </Container>
  )
}

export default Layout