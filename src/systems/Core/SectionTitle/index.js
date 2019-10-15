import styled from '@emotion/styled'
import * as t from 'theme'

export const SectionTitle = styled.h2`
  margin: 0 0 ${p => t.space(p.margin)(p)};
  font-family: ${t.fonts('heading')};
  font-size: ${t.fontSizes(6)};
  font-weight: 800;
  color: ${p => t.color(p.color)(p)};
  text-align: center;
`

SectionTitle.defaultProps = {
  color: 'dark.1',
  margin: 6,
}
