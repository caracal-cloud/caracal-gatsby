import styled from '@emotion/styled'
import * as t from 'theme'

import * as core from 'systems/Core'

export const Wrapper = styled.div`
  padding-top: ${props => (props.isDesktop ? t.space(6) : t.space(5))};
  padding-right: ${props => (props.isDesktop ? 0 : 0)};
  padding-bottom: ${props => (props.isDesktop ? t.space(6) : t.space(5))};
  padding-left: ${props => (props.isDesktop ? 0 : 0)};
`

export const Container = styled(core.Container)`
  display: flex;
  flex-direction: ${props => (props.isDesktop ? 'row' : 'column')};
  justify-content: center;
  padding: 5px;
`
