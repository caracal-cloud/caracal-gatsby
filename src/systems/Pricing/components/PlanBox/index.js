import React from 'react'
import { navigate } from 'gatsby'
import { Button } from 'antd'

import * as st from './styled'

export const PlanBox = ({ plan }) => {
  const { title, price, features } = plan
  const hasPrice = Boolean(price)

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
        <Button
          size="large"
          type={hasPrice ? 'secondary' : 'primary'}
          onClick={() => (hasPrice ? navigate('/register') : null)}
        >
          {hasPrice ? 'Get started' : 'Contact us'}
        </Button>
      </st.Footer>
    </st.Card>
  )
}
