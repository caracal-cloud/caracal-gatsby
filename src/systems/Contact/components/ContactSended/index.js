import React from 'react'
import { Button, Result } from 'antd'

import { useContactForm } from 'systems/Contact'

export const ContactSended = () => {
  const [contact] = useContactForm()
  return (
    <Result
      status="success"
      title="Message sent successfully!"
      subTitle="We've received your message soon, we ll send you an answer!"
      extra={[
        <Button type="primary" key="console" onClick={contact.handleClose}>
          Close
        </Button>,
      ]}
    />
  )
}
