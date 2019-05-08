import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
const WIP = styled.h1`
  color: red;
  font-size: 50px;
  position: absolute;
`
const ProjectPreview = ({ title, description, slug, imageData }) => (
  <div className="project-preview">
    <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <h2>
      <Link to={`/${slug}/`}>{title}</Link>
    </h2>
    <p>{description}</p>
    <WIP>WORK IN PROGRESS</WIP>
    <p>
      <Link to={`/${slug}/`}>View this project &rarr;</Link>
    </p>
  </div>
)

export default ProjectPreview
