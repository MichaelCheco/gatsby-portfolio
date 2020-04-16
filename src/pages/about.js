import React from 'react'
import styled from '@emotion/styled'
import { useSpring, animated } from 'react-spring'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { P } from '../components/project'
export const Header = styled.header`
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
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
export const Card = styled.div`
  transition: box-shadow 0.3s;
  width: 90%;
  max-width: 800px;
  height: 90%;
  margin: 20px 0;
  z-index: 999;
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
const about = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossorigin="anonymous"
        />
      </Helmet>
      <Header className="header">
        <Link to="/">Projects</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </Header>
      <animated.div style={props}>
        <Container>
          <Div />
          <Wrapper>
            <Card>
              <P>
                Hello, <strong>I'm Michael Checo</strong>. I am a Software Engineer based out of Oakland, California.
              </P>
              <Icons>
                <a href="https://twitter.com/MichaelCheco1">
                  <i class="fab fa-twitter" />
                </a>
                <a href="http://michaelcheco.com/">
                  <i class="fas fa-blog" />
                </a>
                <a href="https://www.linkedin.com/in/michael-checo-136ab6178/">
                  <i class="fab fa-linkedin" />
                </a>
                <a href="https://github.com/MichaelCheco">
                  <i class="fab fa-github" />
                </a>
              </Icons>
            </Card>
          </Wrapper>
        </Container>
      </animated.div>
    </>
  )
}
const Icons = styled.div`
  display: flex;
  width: 100%;
  a {
    color: #000000;
    margin: 6px;
    padding: 6px;
  }
  i {
    margin: 6px;
    padding: 6px;
    cursor: pointer;
  }
  font-size: 32px;
  justify-content: center;
`
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`
export const Div = styled.div`
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
export default about
