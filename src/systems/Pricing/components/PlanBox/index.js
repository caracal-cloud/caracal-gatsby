import React from 'react'
import { Button } from 'antd'

import * as st from './styled'

export const PlanBox = ({ plan }) => {
  const { title, price, features } = plan
  const { uid } = plan._meta
  const registerUrl = `https://app.caracal.cloud/register?plan=${uid}`

  let priceText = 'On Request';
  let hasPrice = false;
  if (price === 0) {
    priceText = '0';
    hasPrice = true;
  } else if (price > 0 ) {
    priceText = `${price}`
    hasPrice = true;
  }


  return (
    <st.Card>
      <st.Title>{title[0].text}</st.Title>
      <st.PriceBox>
        {hasPrice && <st.Dollar>$</st.Dollar>}
        <st.Price hasPrice={hasPrice}>{priceText}</st.Price>
        {hasPrice && <st.Period>per month</st.Period>}
      </st.PriceBox>
      <st.Features>
        {features.map((feature, idx) => (
          <li key={idx}>{feature.value}</li>
        ))}
      </st.Features>
      <st.Footer>
        {hasPrice ? (
          <Button
            size="large"
            type="secondary"
            href={registerUrl}
            target="_blank"
          >
            Get Started
          </Button>
        ) : (
          <st.Link to="/contact">Contact us</st.Link>
        )}
      </st.Footer>
    </st.Card>
  )
}
