import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Project from '../components/project'

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      image
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson
  const title = project.title
  const description = project.description
  const image = project.image
  const url = project.url
  return (
    <Layout>
      <Project
        title={title}
        description={description}
        image={image}
        url={url}
      />
    </Layout>
  )
}

export default ProjectTemplate
