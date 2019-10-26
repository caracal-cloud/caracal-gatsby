import React from 'react'
import { Result } from 'antd'

export const ContactFailed = () => {
  return (
    <Result
      status="error"
      title="Submission Failed"
      subTitle="Something wrong happened in our side, try again later!"
    />
  )
}
