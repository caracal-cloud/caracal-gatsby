import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@chakra-ui/core'
import { useStaticQuery, graphql } from 'gatsby'

import theme from 'theme'
import { Header } from 'systems/Header'
import { Footer } from 'systems/Footer'

import * as st from './styles'

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
    <st.Wrapper>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header siteTitle={data.site.siteMetadata.title} />
          <st.Main>{children}</st.Main>
          <Footer />
        </React.Fragment>
      </ThemeProvider>
    </st.Wrapper>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
