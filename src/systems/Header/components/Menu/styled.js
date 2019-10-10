import styled from '@emotion/styled'
import { mixins, color, space } from 'theme'

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: ${space(4)};
  grid-template-columns: repeat(autofit, auto);
  grid-auto-flow: column;

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
