import React from 'react'
import { Link } from 'gatsby'
// import styled from '@emotion/styled'
import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout>
      <h1>Hello {'🚀'}</h1>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default Home
