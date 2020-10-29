import React from 'react'
import { Result } from 'antd'

export const ContactSended = () => {
  return (
    <Result
      status="success"
      title="Message sent successfully!"
      subTitle="We've received your message soon, we ll send you an answer!"
    />
  )
}
