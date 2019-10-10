import styled from '@emotion/styled'
import * as t from 'theme'

import * as core from 'systems/Core'

export const Container = styled(core.Container)`
  ${t.mixins('px', t.space(6))};
  display: grid;
  grid-gap: ${t.space(4)};
  grid-row-gap: ${t.space(6)};
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'illustration illustration illustration'
    'first second third';
`

export const IllustrationWrapper = styled.div`
  grid-area: illustration;
  text-align: center;
`
