import { css } from '@emotion/core'
import { space } from 'theme'

export const centerAlign = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const pseudoElement = css`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  content: '';
`

export const resetList = css`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const horizontalList = gap => css`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${gap};
`
