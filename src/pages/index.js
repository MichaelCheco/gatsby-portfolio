import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import { useSpring, animated } from 'react-spring'
import { GlobalStyles } from '../utils.js/reset'
import Projects from '../components/Projects'
const Div = styled.div`
  border: 3px solid red;
  grid-row: 2 / span 2;
  width: 50%;
  height: 100%;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  justify-items: center;
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
        <Div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          corrupti perspiciatis voluptatem itaque doloremque iure, eveniet odit
          laboriosam distinctio reprehenderit voluptates debitis dolore, fuga
          eligendi esse ipsum eos neque quisquam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Repudiandae magni perspiciatis, quaerat
          aperiam qui molestiae, numquam dicta aliquid nostrum earum distinctio
          maxime ex, quis velit. Quam blanditiis excepturi fugit sint.
        </Div>
        <Div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          corrupti perspiciatis voluptatem itaque doloremque iure, eveniet odit
          laboriosam distinctio reprehenderit voluptates debitis dolore, fuga
          eligendi esse ipsum eos neque quisquam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Repudiandae magni perspiciatis, quaerat
          aperiam qui molestiae, numquam dicta aliquid nostrum earum distinctio
          maxime ex, quis velit. Quam blanditiis excepturi fugit sint.
        </Div>
      </Container>
      <Projects />
    </Layout>
  )
}

export default Home
