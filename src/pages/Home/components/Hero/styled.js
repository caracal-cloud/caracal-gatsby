import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { fonts, fontSizes, space } from 'theme'

export const container = css`
  position: relative;
`

export const Wrapper = styled.div`
  padding: ${space(5)};
  background: #000;
`

export const Info = styled.div`
  z-index: 2;
  position: relative;
  max-width: 300px;
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
  position: absolute;
  top: -64px;
  right: 0;
`
