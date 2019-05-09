import React from 'react'
import { Link } from 'gatsby'
import { useSpring, animated } from 'react-spring'

import Image from 'gatsby-image'
import styled from '@emotion/styled'
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const P = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 20px;
`
const Button = styled.button`
   width: 90%;
  height: 48px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 5px;
  margin: 5px;
  font-size: 15px;
  border: 2px solid #000000
  transition: all 0.6s ease;
  outline: 0;
  a {
    text-decoration: none;
    color: #000000;
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  margin-top: 5px;
  &:hover {
    transition: all 0.6s ease;
    background-color: #000000;
   a {
     color: #FFFFFF;

   } 
    cursor: pointer;
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`
const Card = styled.div`
  transition: box-shadow 0.3s;
  width: 100%;
  max-width: 800px;
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

const Project = ({ title, description, url, imageData }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <animated.div style={props}>
      <Container>
        <Card>
          <Image fluid={imageData} alt={title} />
          <P>{description}</P>
          <Wrapper>
            <Button>
              <a href={url}>VIEW THIS PROJECT ONLINE &rarr;</a>
            </Button>
          </Wrapper>
        </Card>
      </Container>
    </animated.div>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
export default Project
