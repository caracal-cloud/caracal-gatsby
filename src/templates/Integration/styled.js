import styled from '@emotion/styled'
import * as t from 'theme'

import * as core from 'systems/Core'

export const Wrapper = styled.div`
  padding: ${t.space(6)} 0;
`

export const Container = styled(core.Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${t.space(5)};
`
