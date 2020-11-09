import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { fonts, fontSizes, space } from 'theme'

export const Wrapper = styled.div`
  padding: ${props => (props.isDesktop ? space(5) : space(4))};
  background: #000;
`

export const Container = css`
  display: grid;
  justify-content: center;
  align-content: center;
`

export const Info = styled.div`
  z-index: 2;
  max-width: 300px;
  grid-area: ${props => (props.isDesktop ? '1 / 1 / 1 / 1' : '1 / 1 / 1 / 2')};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  font-family: ${fonts('heading')};
  font-size: ${fontSizes(6)};
  letter-spacing: -0.005em;
  margin: 0;
`

export const Subtitle = styled.div`
  margin: ${space(4)} 0;
  font-size: ${fontSizes(3)};
  color: white;
`

export const ImageWrapper = styled.div`
  grid-area: ${props => (props.isDesktop ? '1 / 2 / 1 / 2' : '1 / 1 / 1 / 2')};
`
