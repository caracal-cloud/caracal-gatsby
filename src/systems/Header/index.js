import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { Container, Logo } from 'systems/Core'

import { Menu } from './components/Menu'
import * as st from './styled'

import { useWindowDimensions } from '../WindowDimensionsProvider'

export const Header = ({ siteTitle }) => {
  const { isDesktop } = useWindowDimensions()

  return (
    <st.Wrapper>
      <st.Container isDesktop={isDesktop}>
        {isDesktop && (
          <st.LogoWrapper>
            <Link to="/" title={siteTitle}>
              <Logo />
            </Link>
          </st.LogoWrapper>
        )}
        <Menu />
      </st.Container>
    </st.Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
