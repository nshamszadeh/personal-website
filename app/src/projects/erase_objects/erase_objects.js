import React from 'react'
import Jumbotron from '../../components/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import people_demo from './people_demo.mp4';
import car_demo from './car_demo.mp4'

const Styles = styled.div`
 .description {
    padding-left: 15px;
    padding-right: 20px;
  }
`

function erase_objects() {
  return (
    <React.Fragment>
      <Styles>
        <Jumbotron initial_title="Erasing Objects with AI"
                   main_title=''
                   overlay="default_overlay"
                   overlay2="projects_overlay" />
        <Container fluid='sm'>
          <Row>
          <ul>
              <li> <a href='https://github.com/nshamszadeh/object-erase'>GitHub</a>  </li>
            </ul>
          </Row>
          <Row>
            <Col className='description'>
            
              <p>
              Inspired by <a href='https://www.youtube.com/watch?v=U7LudBS3bS4'>this video</a>,
              I did some research on how one would write a program that would detect objects in a video and remove them while also 
              filling in the newly empty spaces. To my surprise, despite there being demos of such a program there was no open-source code, so I set out to
              write my own software. I decided to use <a href='https://github.com/matterport/Mask_RCNN'>Matterport's Mask_RCNN</a> for the object detection framework
              and <a href='https://github.com/Atlas200dk/sample-imageinpainting-HiFill'>Atlas200dk's Image Inpainting HiFill</a> for the inpainting framework.
              Video processing was done with <a href='https://opencv.org/'>OpenCV</a>, which I learned while working on the project, and  
              <a href='https://numpy.org/'> Numpy</a>. 
              </p>
              <p>
                My main tasks with this project were writing software that allowed Mask_RCNN to work with videos (as opposed to images), and to
                output a mask video compatible with HiFill's mask input. The mask itself is a black and white video, where the black areas indicate
                detected objects and white indicates everything else. I also had to write software which allowed HiFill to process videos instead of 
                images as well. Additionally my code allows for users to determine precisely which classes of objects they would like to erase.
                Examples of erasing cars and people are given below.
              </p>
             </Col>
          </Row>
          <Row>
              <video width='640' height='480' controls>
                <source src={people_demo} type='video/mp4' />
              </video>
          </Row>
          <Row>
              <video width='640' height='480' controls>
                <source src={car_demo} type='video/mp4' />
              </video>
          </Row>
        </Container>
      </Styles>
    </React.Fragment>
  )
}

export default erase_objects
