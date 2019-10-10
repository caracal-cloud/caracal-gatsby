import styled from '@emotion/styled'
import { prop } from 'styled-tools'
import * as t from 'theme'

export const Card = styled.div`
  padding: ${prop('padding', t.space(4))};
  background: white;
  border: 3px solid #e6e6e6;
  border-radius: ${t.radii('rounded')};
`

Card.Title = styled.h3`
  position: relative;
  font-family: ${t.fonts('heading')};
  font-size: ${t.fontSizes(5)};
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${t.color('gray.0')};
  margin: 0 0 ${t.space(4)};

  &:before {
    ${t.mixins('pseudoElement')};
    top: calc(100% + 2px);
    left: 0;
    height: 2px;
    width: 15%;
    background: ${t.color('lightGray.1')};
  }
`

Card.Subtitle = styled.h4`
  margin: ${t.space(3)} 0 ${t.space(2)};
  font-size: ${t.fontSizes(1)};
  font-weight: 700;
  color: ${t.color('gray.1')};
`

Card.Body = styled.div`
  margin-top: ${t.space(3)};
`
