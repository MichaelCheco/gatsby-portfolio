import React from 'react'
import styled from '@emotion/styled'
import { useSpring, animated } from 'react-spring'

import { Link } from 'gatsby'
import { Header, Wrapper, Div } from './about'
import { P } from '../components/project'
const contact = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <>
      <Header>
        <Link to="/">Projects</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </Header>
      <animated.div style={props}>
        <Div />
        <Wrapper>
          <Card>
            <Icon>
              <a href="mailto:checomichael2@gmail.com">
                <i class="fas fa-envelope" />
              </a>
            </Icon>
          </Card>
        </Wrapper>
      </animated.div>
    </>
  )
}
export const Card = styled.div`
  transition: box-shadow 0.3s;
  width: 100%;
  max-width: 800px;
  height: 50%;
  margin: 20px 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
  @media (max-width: 1000px) {
    margin: 0 auto;
  }
  h2 {
    margin-top: 5px;
    a {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      text-decoration: none;
    }
  }
  padding: 12px;
  background: #fff;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  }
`
const Icon = styled.div`
  a {
    color: #000000;
  }
  i {
    font-size: 200px;
    margin: 10px;
    padding: 10px;
    cursor: pointer;
  }
`

export default contact
