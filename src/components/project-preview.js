import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
const WIP = styled.h1`
  color: red;
  font-size: 50px;
  position: absolute;
`
export const Card = styled.div`
  transition: box-shadow 0.3s;
  width: 90%;
  z-index: 999;
  border-radius: 3px;
  h2 {
    margin-top: 10px;
    a {
      color: #000000;
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
const P = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Button = styled.button`
  width: 174px;
  height: 45px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 5px;
  font-size: 14px;
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
const ProjectPreview = ({ title, description, slug, imageData }) => (
  <div>
    <Card>
      <Link to={`/${slug}/`}>
        <Image fluid={imageData} alt={title} />
      </Link>
      <h2>
        <Link to={`/${slug}/`}>{title}</Link>
      </h2>
      <P>{description}</P>
      <Button>
        <Link to={`/${slug}/`}>VIEW THIS PROJECT &rarr;</Link>
      </Button>
    </Card>
  </div>
)
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  border: 1px solid #999999;
  border-radius: 3px;
`
export default ProjectPreview
