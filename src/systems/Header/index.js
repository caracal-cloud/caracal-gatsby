/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { Container, Logo } from 'systems/Core'

import { Menu } from './components/Menu'
import * as st from './styled'

export const Header = ({ siteTitle }) => {
  return (
    <st.Wrapper>
      <Container css={st.container}>
        <st.LogoWrapper>
          <Link to="/" title={siteTitle}>
            <Logo />
          </Link>
        </st.LogoWrapper>
        <Menu />
      </Container>
    </st.Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
