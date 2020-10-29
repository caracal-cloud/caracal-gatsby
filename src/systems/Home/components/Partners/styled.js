import styled from '@emotion/styled'
import * as t from 'theme'

import * as core from 'systems/Core'

export const Wrapper = styled.div`
  padding: ${t.space(6)};
  background: ${t.color('gray.1')};
`

export const Container = styled(core.Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${t.space(2)};
  align-items: center;
  justify-items: center;

  img {
    margin: 0;
  }
`
