import styled from '@emotion/styled'
import { color, space } from 'theme'

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: ${space(4)};
  grid-template-columns: repeat(autofit, auto);
  grid-auto-flow: column;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
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
`
