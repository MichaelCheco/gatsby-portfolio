import React from 'react'
import { useSpring, animated } from 'react-spring'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import './layout.css'
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  margin-top: 60px;

  justify-items: center;
  border-radius: 3px;
  max-width: 1000px;
  width: 100%;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
  }
`
const Div = styled.div`
  width: 100vw;
  position: absolute;
  height: 100vh;
  bottom: 15%;
  z-index: -1;
  background: linear-gradient(
    to bottom right,
    transparent calc(50% - 1px),
    black calc(50% - 1px),
    black 50%,
    transparent 50%
  );
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

const Layout = ({ children }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 50 })
  return (
    <React.Fragment>
      <animated.div style={props}>
        <Div />
        <Header className="header">
          <Link to="/">Projects</Link>
          <Link to="/about">About Me</Link>
          <Link to="/contact">Contact</Link>
        </Header>
        <Container className="content">{children}</Container>
      </animated.div>
    </React.Fragment>
  )
}

export default Layout
