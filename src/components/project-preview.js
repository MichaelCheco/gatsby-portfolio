import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
const WIP = styled.h1`
  color: red;
  font-size: 50px;
  position: absolute;
`
const Card = styled.div`
  transition: box-shadow 0.3s;
  width: 330px;
  height: 500px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  }
`
const ProjectPreview = ({ title, description, slug, imageData }) => (
  <Container>
    <Card>
      <Link to={`/${slug}/`}>
        <Image fluid={imageData} alt={title} />
      </Link>
      <h2>
        <Link to={`/${slug}/`}>{title}</Link>
      </h2>
      <p>{description}</p>
      <p>
        <Link to={`/${slug}/`}>View this project &rarr;</Link>
      </p>
    </Card>
  </Container>
)
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  border: 1px solid #999999;
  border-radius: 3px;
`
export default ProjectPreview
