import styled from '@emotion/styled'
import { prop } from 'styled-tools'

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.isDesktop ? 'row' : 'column')};
  justify-content: center;
  align-items: flex-start;
`
