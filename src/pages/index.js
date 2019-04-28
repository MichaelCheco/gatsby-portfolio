import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import { useSpring, animated } from 'react-spring'
import { GlobalStyles } from '../utils.js/reset'
import Projects from '../components/Projects'
const Div = styled.div`
  grid-row: 2 / span 2;
  width: 50%;
  border: 3px solid red;
  height: 100%;
`
const Container = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  justify-items: center;
  /* align-content: center; */
  align-items: center;
  width: 100%;
  height: 100vh;
`
const Home = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 })
  return (
    <Layout>
      <GlobalStyles />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          height: '100px',
        }}
      >
        <circle fill="white" cx="0" cy="100" r="100" />
        <circle fill="white" cx="200" cy="100" r="100" />
      </svg>
      <Container style={fadeIn}>
        {/* <Div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          corrupti perspiciatis voluptatem itaque doloremque iure, eveniet odit
          laboriosam distinctio reprehenderit voluptates debitis dolore, fuga
          eligendi esse ipsum eos neque quisquam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Repudiandae magni perspiciatis, quaerat
          aperiam qui molestiae, numquam dicta aliquid nostrum earum distinctio
          maxime ex, quis velit. Quam blanditiis excepturi fugit sint.
        </Div> */}
        <Card />
        <Card />
      </Container>
      <Projects />
    </Layout>
  )
}
const Cardd = styled.div`
  width: 50ch;
  height: 50ch;
  background: grey;
  grid-row: 2;
  border-radius: 5px;
  background-image: url(https://i2.wp.com/michaelcheco.com/wp-content/uploads/2019/04/me.jpg?zoom=2&resize=298%2C300&ssl=1);
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
function Card() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  return (
    <Cardd>
      <animated.a
        href="https://github.com"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
    </Cardd>
  )
}

export default Home
