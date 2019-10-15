import styled from '@emotion/styled'
import { css } from '@emotion/core'
import * as t from 'theme'

import * as core from 'systems/Core'

export const body = css`
  max-width: 400px;
`

export const infos = css`
  flex: 1;
`

export const Card = styled(core.Card)`
  display: flex;
  flex-direction: column;
`

export const Info = styled.div`
  & ~ & {
    margin-top: ${t.space(1)};
  }
`

export const Label = styled.span`
  display: inline-block;
  font-weight: 700;
  width: 50px;
  color: ${t.color('gray.1')};
  text-align: right;
`

export const Value = styled.span`
  margin-left: ${t.space(2)};
  font-weight: 400;
`
