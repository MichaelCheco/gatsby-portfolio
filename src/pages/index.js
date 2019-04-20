import React from 'react'
import { Link } from 'gatsby'
// import styled from '@emotion/styled'
import Layout from '../components/layout'
import { useSpring, animated } from 'react-spring'
const Home = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <Layout>
      <animated.h1 style={fadeIn}>Hello {'🚀'}</animated.h1>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default Home
