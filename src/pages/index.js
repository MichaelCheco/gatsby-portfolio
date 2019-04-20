import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import { useSpring, animated } from 'react-spring'
const Div = styled.div`
  border: 3px solid red;
  background: yellow;
  width: 100px;
  height: 150px;
`
const Home = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <Layout>
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
      <Div>Hello</Div>
    </Layout>
  )
}

export default Home
