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
  background-color: #000000;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 8vh;
  a {
    color: #ffffff;
    margin: 0 5px;
    padding: 2px;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

const Layout = ({ children }) => (
  <React.Fragment>
    <Header className="header">
      <Link to="/">Projects</Link>
      <Link to="/about">About Me</Link>
      <Link to="/contact">Contact</Link>
    </Header>
    <Main className="content">{children}</Main>
  </React.Fragment>
)

export default Layout
