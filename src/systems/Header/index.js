/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import { Container, Logo } from 'systems/Core'

import { Menu } from './components/Menu'
import * as st from './styled'

export const Header = ({ siteTitle }) => {
  return (
    <st.Wrapper>
      <Container css={st.container}>
        <st.LogoWrapper>
          <Logo alt={siteTitle} />
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
