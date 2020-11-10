import styled from '@emotion/styled'
import * as t from 'theme'

import * as core from 'systems/Core'

export const Wrapper = styled.div`
  padding: ${t.space(6)} 0;
`

export const Container = styled(core.Container)`
  display: flex;
  flex-direction: ${props => (props.isDesktop ? 'row' : 'column')};
  justify-content: center;
`
