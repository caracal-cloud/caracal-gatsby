import styled from '@emotion/styled'
import * as t from 'theme'

export const SectionTitle = styled.h2`
  margin: 0 0 ${t.space(6)};
  font-family: ${t.fonts('heading')};
  font-size: ${t.fontSizes(6)};
  font-weight: 800;
  color: ${p => t.color(p.color)(p)};
  text-align: center;
`

SectionTitle.defaultProps = {
  color: 'dark.1',
}
