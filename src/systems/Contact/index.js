import React from 'react'

import * as st from './styled'
import { SectionTitle, Container } from 'systems/Core'
import { useContactForm } from './hooks/useContactForm'
import { ContactBody } from './components/ContactBody'

export const Contact = () => {
  const [, Provider] = useContactForm()
  return (
    <Provider>
      <st.Wrapper>
        <SectionTitle bg="lightGray.0">
          <SectionTitle.Text color="gray.0">Contact Us</SectionTitle.Text>
        </SectionTitle>
        <Container>
          <ContactBody />
        </Container>
      </st.Wrapper>
    </Provider>
  )
}
