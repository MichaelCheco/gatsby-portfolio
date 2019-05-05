import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import { useSpring, animated } from 'react-spring'
import { GlobalStyles } from '../utils.js/reset'
import Projects from '../components/Projects'
import ProjectPreview from '../components/project-preview'
const Div = styled.div`
  grid-row: 2 / span 2;
  width: 50%;
  border: 3px solid red;
  height: 100%;
`
const Header = styled.header`
  position: relative;
  height: 750px;
  background-image: linear-gradient(#ff9d2f, #ff6126);
  border-bottom-left-radius: 30% 20%;
  border-bottom-right-radius: 30% 20%;
`
const Container = styled(animated.div)`
  display: grid;
  border: 3px solid black;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`
const Home = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 })
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            description
            image
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.edges

  return (
    <Layout>
      <Container style={fadeIn}>
        <h1>Michael Checo</h1>
        {projects.map(({ node: project }) => {
          const title = project.title
          const description = project.description
          const slug = project.slug
          const image = project.image
          return (
            <ProjectPreview
              title={title}
              description={description}
              slug={slug}
              image={image}
            />
          )
        })}
      </Container>
    </Layout>
  )
}
// const Cardd = styled.div`
//   width: 50ch;
//   height: 50ch;
//   background: grey;
//   grid-row: 2;
//   border-radius: 5px;
//   background-image: url(https://i2.wp.com/michaelcheco.com/wp-content/uploads/2019/04/me.jpg?zoom=2&resize=298%2C300&ssl=1);
//   background-size: cover;
//   background-position: center center;
//   box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
//   transition: box-shadow 0.5s;
//   will-change: transform;
//   border: 15px solid white;

//   &:hover {
//     box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
//   }
// `

export default Home
