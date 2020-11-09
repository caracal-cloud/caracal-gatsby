import React from 'react'

import { SectionTitle } from 'systems/Core'
import { SearchIntegrations } from 'systems/Integrations'
import { UseCases } from 'systems/Home'
import * as st from './styled'

import { useWindowDimensions } from '../../../WindowDimensionsProvider'

export const Applications = () => {
  const { isDesktop } = useWindowDimensions()

  return (
    <st.Wrapper>
      <SectionTitle isDesktop={isDesktop}>
        <SectionTitle.Text color="gray.1" isDesktop={isDesktop}>
          Applications
        </SectionTitle.Text>
      </SectionTitle>
      <st.Container isDesktop={isDesktop}>
        <SearchIntegrations />
        <UseCases />
      </st.Container>
    </st.Wrapper>
  )
}
