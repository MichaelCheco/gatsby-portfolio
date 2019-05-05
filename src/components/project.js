import React from 'react'
import { Link } from 'gatsby'
// import Image from 'gatsby-image'

const Project = ({ image, title, description, url }) => (
  <div>
    <h1>{title}</h1>
    <img src={image} alt={title} />
    <p>{description}</p>
    <p>
      <Link to={{ url }}>View this project online</Link>
    </p>
    <p>
      <Link to="/">&larr; back to all projects</Link>
    </p>
  </div>
)

export default Project
