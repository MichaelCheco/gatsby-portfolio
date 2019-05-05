import React from 'react'
import { Link } from 'gatsby'
// import Image from 'gatsby-image'

const ProjectPreview = ({ slug, image, title, description }) => (
  <div>
    <Link to={`/${slug}/`}>
      <img src={image} alt={title} />
    </Link>
    <h2>
      <Link to={`/${slug}/`}>{title}</Link>
    </h2>
    <p>{description}</p>
    <p>
      <Link to={`/${slug}/`}>View this project</Link>
    </p>
  </div>
)

export default ProjectPreview
