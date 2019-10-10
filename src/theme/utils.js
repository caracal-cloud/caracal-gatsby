import { theme } from 'styled-tools'

const toRem = fn => props => {
  const res = parseFloat(fn(props))
  const { fontSize } = getComputedStyle(document.documentElement)
  return `${res / parseFloat(fontSize)}rem`
}

const toPx = fn => props => {
  const res = parseFloat(fn(props))
  return `${res}px`
}

export const color = str => theme(`colors.${str}`)
export const fonts = str => theme(`fonts.${str}`)
export const space = str => toRem(theme(`space.${str}`))
export const radii = str => toPx(theme(`radii.${str}`))
export const fontSizes = str => toRem(theme(`fontSizes.${str}`))
export const fontWeights = str => theme(`fontWeights.${str}`)
export const lineHeights = str => theme(`lineHeights.${str}`)
export const styles = str => theme(`styles.${str}`)

export const mixins = (str, ...params) => props => {
  const res = theme(`mixins.${str}`)(props)
  return typeof res === 'function' ? res(...params.map(p => p(props))) : res
}
