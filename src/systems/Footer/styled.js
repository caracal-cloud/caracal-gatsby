import styled from '@emotion/styled'
import { styles, fontSizes, mixins, color, space } from 'theme'

import * as core from 'systems/Core'

export const Container = styled(core.Container)`
  ${styles('header')};
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: ${space(5)};
  align-items: center;
`

export const Wrapper = styled.div`
  background: ${color('header.bg')};
  color: white;
`

export const Copyright = styled.span`
  color: ${color('gray.2')};
`

export const Menu = styled.ul`
  ${mixins('resetList')};
  ${mixins('horizontalList', space(3))};

  li {
    margin: 0;
    text-align: center;
  }

  li > a {
    color: white;
  }

  li > a:hover,
  li > a.active {
    color: ${color('forest.4')};
  }
`

export const SocialIcons = styled(Menu)`
  font-size: ${fontSizes(4)};
  justify-items: end;
  grid-column-start: 4;
`
