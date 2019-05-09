import React from 'react'
import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Project from '../components/project'
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

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson
  const title = project.title
  const description = project.description
  const imageData = project.image.childImageSharp.fluid
  const url = project.url

  return (
    <>
      <Header className="header">
        <Link to="/">Projects</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </Header>
      <Div />
      <Container>
        <Project
          title={title}
          description={description}
          imageData={imageData}
          url={url}
        />
      </Container>
    </>
  )
}
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
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
export default ProjectTemplate
