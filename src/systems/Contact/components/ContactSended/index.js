import React from 'react'
import { Result } from 'antd'

export const ContactSended = () => {
  return (
    <Result
      status="success"
      title="Message received!"
      subTitle="We've received your message and will get back to you soon!"
    />
  )
}
