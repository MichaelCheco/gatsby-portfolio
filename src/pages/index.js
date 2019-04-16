import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Image from '../components/image'

const H1 = styled.h1`
  color: red;
`
const IndexPage = () => (
  <Layout>
    <H1>
      Hello {'🚀'}
    </H1>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
