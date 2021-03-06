import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'
import * as t from 'theme'

import * as core from 'systems/Core'

export const Wrapper = styled.div`
  flex: 1;
  margin-bottom: 20px;
  height: 100%;
`

export const Title = styled.h3`
  margin: 0 0 ${t.space(4)};
  font-family: ${t.fonts('heading')};
  color: ${t.color('dark.2')};
`

export const Card = styled(core.Card)`
  padding: ${t.space(2)};
`

export const Header = styled.div`
  padding: ${t.space(2)};
`

export const Integrations = styled.div`
  max-height: 350px;
  overflow-y: auto;
`

export const IntegrationRow = styled.div`
  display: flex;
  align-items: center;
  padding: ${t.space(2)};
  background: ${ifProp('selected', t.color('lightGray.4'), 'transparent')};

  &:hover {
    cursor: pointer;
    background: ${t.color('lightGray.4')};
  }
`

export const IntegrationThumb = styled.div`
  margin-right: ${t.space(3)};

  img {
    border: 1px solid #d9d9d9;
    border-radius: ${t.radii('radius')};
    margin: 0;
  }
`

export const IntegrationTitle = styled.h4`
  margin: 0;
  color: ${ifProp('selected', t.color('forest.2', t.color('dark.2')))};
`

export const IntegrationSubtitle = styled.div`
  margin: 0;
  color: ${t.color('gray.1')};
`
