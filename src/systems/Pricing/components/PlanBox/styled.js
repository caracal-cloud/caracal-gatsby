import styled from '@emotion/styled'
import { Link as BaseLink } from 'gatsby'
import { ifProp } from 'styled-tools'
import * as t from 'theme'

import * as core from 'systems/Core'

export const Card = styled(core.Card)`
  width: 100%;
`

export const Title = styled.h2`
  margin: 0;
  font-size: ${t.fontSizes(4)};
  font-family: ${t.fonts('heading')};
  font-weight: 700;
  text-align: center;
  color: ${t.color('gray.0')};
`

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${t.space(4)} -${t.space(4)};
  padding: ${t.space(3)} 0;
  border-top: 1px dashed ${t.color('lightGray.2')};
  border-bottom: 1px dashed ${t.color('lightGray.2')};
  background: ${t.color('lightGray.4')};
`

export const Dollar = styled.span`
  font-size: ${t.fontSizes(5)};
  color: ${t.color('gray.1')};
`

export const Price = styled.div`
  font-size: ${ifProp('hasPrice', t.fontSizes(6), t.fontSizes(5))};
  font-family: ${t.fonts('heading')};
  font-weight: 700;
  line-height: 45px;
  letter-spacing: -0.03em;
  color: ${t.color('forest.1')};
  text-align: center;
`

export const Period = styled.div`
  margin-left: ${t.space(2)};
  font-size: ${t.fontSizes(3)};
  color: ${t.color('gray.1')};
  text-align: center;
`

export const Features = styled.ul`
  ${t.mixins('resetList')};
  text-align: center;

  li {
    line-height: 1;
    font-weight: 500;
  }
`

export const Footer = styled.div`
  margin-top: ${t.space(5)};
  text-align: center;
`

export const Link = styled(BaseLink)`
  background: ${t.color('forest.3')};
  padding: ${t.space(2)} ${t.space(3)};
  border-radius: ${t.radii('radius')};
  font-size: ${t.fontSizes(2)};

  &,
  &:hover {
    color: white;
  }
`
