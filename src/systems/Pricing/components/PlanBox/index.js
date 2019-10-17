import React from 'react'
import { Button } from 'antd'

import * as st from './styled'
import { useContactForm } from 'systems/Contact'

export const PlanBox = ({ plan }) => {
  const [contact] = useContactForm()

  const { title, price, features } = plan
  const { uid } = plan._meta
  const hasPrice = Boolean(price)
  const registerUrl = `https://app.caracal.cloud/register?plan=${uid}`
  const btnType = hasPrice ? 'secondary' : 'primary'

  function handleClick() {
    hasPrice ? window.open(registerUrl) : contact.handleOpen()
  }

  return (
    <st.Card>
      <st.Title>{title[0].text}</st.Title>
      <st.PriceBox>
        {hasPrice && <st.Dollar>$</st.Dollar>}
        <st.Price hasPrice={hasPrice}>{price || 'On Request'}</st.Price>
        {hasPrice && <st.Period>per month</st.Period>}
      </st.PriceBox>
      <st.Features>
        {features.map((feature, idx) => (
          <li key={idx}>{feature.value}</li>
        ))}
      </st.Features>
      <st.Footer>
        <Button size="large" type={btnType} onClick={handleClick}>
          {hasPrice ? 'Get started' : 'Contact us'}
        </Button>
      </st.Footer>
    </st.Card>
  )
}
