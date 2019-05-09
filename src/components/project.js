import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
const Container = styled.div`
  /* border: 1px solid red; */
  width: 980px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  transition: box-shadow 0.3s;
  width: 50%;
  margin: 0 auto;
  z-index: 999;
  border-radius: 3px;
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
const Div = styled.div`
  width: 100vw;
  position: absolute;
  border: 1px solid red;
  height: 100vh;
  bottom: 15%;
  background: linear-gradient(
    to bottom right,
    transparent calc(50% - 1px),
    black calc(50% - 1px),
    black 50%,
    transparent 50%
  );
`
const Div2 = styled.div`
  width: 100%;
  position: absolute;
  height: 30%;
  left: 30%;
  background: linear-gradient(
    to top right,
    transparent calc(90% - 1px),
    black calc(90% - 1px),
    black 50%,
    transparent 50%
  );
`
const Project = ({ title, description, url, imageData }) => (
  <>
    {/* <Div /> */}
    {/* <Div2 /> */}
    <Container>
      <Card>
        <h1>{title}</h1>
        <Image fluid={imageData} alt={title} />
        <p>{description}</p>
        <p>
          <a href={url}>View this project online &rarr;</a>
        </p>
        <p>
          <Link to="/">&larr; back to all projects</Link>
        </p>
      </Card>
    </Container>
  </>
)

export default Project
