import React from 'react'
import styled from 'styled-components';
import Jumbotron from './components/Jumbotron';

const Styles = styled.div`
  .title {
    font-weight: normal;
  }
`

export default function Home() {
  return (
    <React.Fragment>
      <Jumbotron initial_title="Hi, I'm" main_title="Navid Shamszadeh" overlay="home_overlay" />
      <Styles>
        <div>
          <h3 className='title'>A little about me</h3>
          <p>
            I am a recent graduate in computer science and mathematics. 
            Prior to my graduation I worked as a computer science tutor and a grader for the math department.
            During my summers I took directed reading courses in advanced mathematics and 
            briefly participated in a research lab writing software to conduct psychology experiments.
          </p>
          <p>
            I graduated in the summer of 2020, a time plagued with a great amount of uncertainty.
            Despite this, I interned at HRL Laboratories where I wrote large scale data generation
            and handling software, aiding in the research of autonomous vehicles and machine learning operations.
          </p>
        </div>
      </Styles>
    </React.Fragment>
  )
}