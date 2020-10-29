import React from 'react'

import { SectionTitle } from 'systems/Core'
import { SearchIntegrations } from 'systems/Integrations'
import { UseCases } from 'systems/Home'
import * as st from './styled'

export const Applications = () => {
  return (
    <st.Wrapper>
      <SectionTitle>
        <SectionTitle.Text color="gray.1">Applications</SectionTitle.Text>
      </SectionTitle>
      <st.Container>
        <SearchIntegrations />
        <UseCases />
      </st.Container>
    </st.Wrapper>
  )
}
