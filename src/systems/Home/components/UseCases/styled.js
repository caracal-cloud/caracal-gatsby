import styled from '@emotion/styled'
import * as t from 'theme'

import * as core from 'systems/Core'

export const Title = styled.h3`
  margin: 0 0 ${t.space(4)};
  font-family: ${t.fonts('heading')};
  color: ${t.color('dark.2')};
`

export const Card = styled(core.Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: ${t.space(2)};
  }

  p {
    margin: 0;
  }

  & ~ & {
    margin-top: ${t.space(3)};
  }
`
