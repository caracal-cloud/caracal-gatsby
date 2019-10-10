import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import { useStaticQuery, graphql } from 'gatsby'

import theme from 'theme'
import { Header } from 'systems/Header'

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export const MainLayout = ({ children }) => {
  const data = useStaticQuery(query)

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
        </div>
      </React.Fragment>
    </ThemeProvider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
