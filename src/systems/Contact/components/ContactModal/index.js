import React from 'react'
import { Modal } from 'antd'

import { useContactForm } from 'systems/Contact'
import { ContactForm } from '../ContactForm'
import { ContactSended } from '../ContactSended'
import { ContactFailed } from '../ContactFailed'

export const ContactModal = () => {
  const [contact] = useContactForm()
  const { meta, handleClose, handleSubmit } = contact

  return (
    <Modal
      title="Contact Form"
      visible={meta.isModalVisible}
      onCancel={handleClose}
      footer={null}
    >
      {(meta.isOpened || meta.isSubmitting) && (
        <ContactForm onSubmit={handleSubmit} isSubmitting={meta.isSubmitting} />
      )}
      {meta.hasFailed && <ContactFailed />}
      {meta.hasSended && <ContactSended />}
    </Modal>
  )
}
