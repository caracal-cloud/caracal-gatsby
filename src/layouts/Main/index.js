import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import { StaticQuery, graphql } from 'gatsby'

import WindowDimensionsProvider from '../../systems/WindowDimensionsProvider'
import theme from 'theme'
import { Header } from 'systems/Header'
import { Footer } from 'systems/Footer'

import * as st from './styles'

export const MainLayout = ({ children }) => {
  return (
    <WindowDimensionsProvider>
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
          <st.Wrapper>
            <ThemeProvider theme={theme}>
              <>
                <Header siteTitle={data.site.siteMetadata.title} />
                <st.Main>{children}</st.Main>
                <Footer />
              </>
            </ThemeProvider>
          </st.Wrapper>
        )}
      />
    </WindowDimensionsProvider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
