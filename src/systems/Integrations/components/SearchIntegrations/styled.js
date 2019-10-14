import styled from '@emotion/styled'
import { prop } from 'styled-tools'
import * as t from 'theme'

export const Title = styled.h3`
  margin: 0 0 ${t.space(4)};
  font-family: ${t.fonts('heading')};
  color: ${t.color('dark.2')};
`

export const Card = styled.div`
  padding: ${t.space(2)};
  background: white;
  border: 1px solid ${t.color('lightGray.1')};
  border-radius: ${t.radii('radius')};
`

export const Header = styled.div`
  padding: ${t.space(2)};
`

export const Integrations = styled.div`
  max-height: 270px;
  overflow-y: auto;
`

export const IntegrationRow = styled.div`
  display: flex;
  align-items: center;
  padding: ${t.space(2)};

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
`

export const IntegrationSubtitle = styled.div`
  margin: 0;
`
