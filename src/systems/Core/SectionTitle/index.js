import styled from '@emotion/styled'
import * as t from 'theme'

export const SectionTitle = styled.h2`
  display: table;
  position: relative;
  margin: 0 auto ${p => t.space(p.margin)(p)} auto;

  &:before {
    ${t.mixins('pseudoElement')};
    left: 50%;
    z-index: 0;
    width: ${props => (props.isDesktop ? '130%' : '100%')};
    height: 100%;
    background: ${p => t.color(p.bg)};
    transform: translateX(-50%) skewX(30deg);
  }
`

SectionTitle.defaultProps = {
  color: 'dark.1',
  bg: 'gray.4',
  margin: 6,
}

SectionTitle.Text = styled.span`
  position: relative;
  z-index: 1;
  font-family: ${t.fonts('heading')};
  font-size: ${t.fontSizes(6)};
  font-weight: 800;
  color: ${p => t.color(p.color)(p)};
  text-align: center;
`
