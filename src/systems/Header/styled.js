import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { color, space } from 'theme'

export const container = css`
  display: flex;
`

export const Wrapper = styled.div`
  padding: ${space(3)} ${space(4)};
  background: ${color('header.bg')};
  color: ${color('header.color')};
`

export const LogoWrapper = styled.div`
  flex: 1;
`
