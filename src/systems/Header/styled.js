import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { mixins, styles, color, space } from 'theme'

export const container = css`
  display: flex;
`

export const Wrapper = styled.div`
  ${styles('header')};
  padding: 0 ${space(4)};
  background: ${color('header.bg')};
  color: ${color('header.color')};
`

export const LogoWrapper = styled.div`
  ${styles('header')};
  ${mixins('centerAlign')};
  justify-content: flex-start;
  flex: 1;
`
