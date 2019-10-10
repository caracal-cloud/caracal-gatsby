import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { mixins, color, space } from 'theme'

export const List = styled.ul`
  ${mixins('resetList')};
  ${mixins('horizontalList', space(4))};

  li {
    ${mixins('centerAlign')};
    position: relative;
    margin: 0;
  }

  li > a {
    color: ${color('lightGray.0')};
    transition: color 0.2s;
  }

  li > a.active,
  li > a:hover {
    color: ${color('forest.4')};
  }

  li a:before {
    ${mixins('pseudoElement')};
    width: 100%;
    height: 0px;
    background: transparent;
    transition: all 0.3s;
  }

  li a.active:before {
    height: 2px;
    background: ${color('forest.3')};
  }
`
