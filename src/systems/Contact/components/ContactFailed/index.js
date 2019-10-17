import React from 'react'
import { Button, Result } from 'antd'

import { useContactForm } from 'systems/Contact'

export const ContactFailed = () => {
  const [contact] = useContactForm()
  return (
    <Result
      status="error"
      title="Submission Failed"
      subTitle="Something wrong happened in our side, try again later!"
      extra={[
        <Button type="primary" key="console" onClick={contact.handleClose}>
          Close
        </Button>,
      ]}
    />
  )
}
