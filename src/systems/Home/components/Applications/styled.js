import styled from '@emotion/styled'
import * as t from 'theme'

import * as core from 'systems/Core'

export const Wrapper = styled.div`
  padding: ${t.space(6)} 0;
  background: ${t.color('lightGray.3')};
`

export const Container = styled(core.Container)`
  display: grid;
  grid-gap: ${t.space(6)};
  grid-template-columns: 1fr 1fr;
`
