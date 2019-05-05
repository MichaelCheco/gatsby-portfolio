import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { GlobalStyles } from '../utils.js/reset'
import { StaticQuery, graphql, Link } from 'gatsby'
import './layout.css'
const Header = styled.header`
  position: relative;
  height: 750px;
  background-image: linear-gradient(#aaffa9, #11ffbd);
  border-bottom-left-radius: 30% 20%;
  border-bottom-right-radius: 30% 20%;
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <GlobalStyles />
        </Helmet>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <>
          <Link to="/">My Portfolio</Link>
          <Header>{children}</Header>
        </>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
