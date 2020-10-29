import { css } from '@emotion/core'

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

export const px = val => css`
  padding-top: ${val};
  padding-bottom: ${val};
`

export const py = val => css`
  padding-left: ${val};
  padding-right: ${val};
`

export const mx = val => css`
  margin-top: ${val};
  margin-bottom: ${val};
`

export const my = val => css`
  margin-left: ${val};
  margin-right: ${val};
`
