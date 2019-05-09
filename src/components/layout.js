import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import './layout.css'
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  margin-top: 60px;
  border-radius: 3px;
  max-width: 1000px;
  width: 100%;
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
    <Container className="content">{children}</Container>
  </React.Fragment>
)

export default Layout
