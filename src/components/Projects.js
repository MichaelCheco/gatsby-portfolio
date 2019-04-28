import React from 'react'
import styled from '@emotion/styled'
import { useSpring, animated } from 'react-spring'
import '../styles.css'
const Container = styled.div`
  margin-top: 160px;
`
const H1 = styled.h1`
  text-align: center;
  font-size: 50px;
`
const Projects = () => {
  return (
    <Container>
      <H1>Projects</H1>
    </Container>
  )
}

export default Projects
