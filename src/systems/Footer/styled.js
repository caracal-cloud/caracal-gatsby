import styled from '@emotion/styled'
import { styles, fontSizes, mixins, color, space } from 'theme'

import * as core from 'systems/Core'

export const Wrapper = styled.div`
  width: 100%;
  background: ${color('header.bg')};
  color: white;
  padding: 10px;
`

export const Container = styled(core.Container)`
  width: 100%;
  height: ${props => (props.isDesktop ? '70px' : '100px')};
  display: flex;
  flex-direction: ${props => (props.isDesktop ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
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
