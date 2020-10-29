import React from 'react'

import { useContactForm } from '../../hooks/useContactForm'
import { ContactForm } from '../ContactForm'
import { ContactSended } from '../ContactSended'
import { ContactFailed } from '../ContactFailed'

export const ContactBody = () => {
  const [contact] = useContactForm()
  const { meta, handleSubmit } = contact

  return (
    <div css={{ width: 400, margin: '0 auto' }}>
      {(meta.isIdle || meta.isSubmitting) && (
        <ContactForm onSubmit={handleSubmit} isSubmitting={meta.isSubmitting} />
      )}
      {meta.hasFailed && <ContactFailed />}
      {meta.hasSended && <ContactSended />}
    </div>
  )
}
