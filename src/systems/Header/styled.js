import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { mixins, styles, color, space } from 'theme'

export const Wrapper = styled.div`
  width: 100%;
  ${styles('header')};
  padding: 0 ${space(4)};
  background: ${color('header.bg')};
  color: ${color('header.color')};
`

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.isDesktop ? 'space-between' : 'center')};
`

export const LogoWrapper = styled.div`
  ${styles('header')};
  ${mixins('centerAlign')};
`
