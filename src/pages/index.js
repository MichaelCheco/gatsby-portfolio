import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import { useSpring, animated } from 'react-spring'
import { GlobalStyles } from '../utils.js/reset'
const Div = styled.div`
  border: 3px solid red;
  grid-row: 2 / span 2;
  width: 50%;
  height: 100%;
  /* width: 45%; */
  /* height: 30vh; */
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  justify-items: center;
  /* align-items: center; */
  border: 5px solid black;
  width: 100%;
  height: 100vh;
`
const Home = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <Layout>
      <GlobalStyles />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          height: '100px',
        }}
      >
        <circle fill="white" cx="0" cy="100" r="100" />
        <circle fill="white" cx="200" cy="100" r="100" />
      </svg>
      <Container>
        <Div>Hello</Div>
        <Div>Goodbye</Div>
      </Container>
    </Layout>
  )
}

export default Home
