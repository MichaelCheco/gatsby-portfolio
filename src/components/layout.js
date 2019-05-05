import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import './layout.css'
const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5rem auto;
  max-width: 90%;
  width: 57ch;
`
const Header = styled.header`
  background-color: #0076ff;
  a {
    color: #ffffff;
  }
`

const Layout = ({ children }) => (
  <React.Fragment>
    <Header className="header">
      <Link to="/">My Portfolio</Link>
    </Header>
    <Main className="content">{children}</Main>
  </React.Fragment>
)

export default Layout
