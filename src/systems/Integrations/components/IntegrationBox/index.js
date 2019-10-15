import React from 'react'
import { Button } from 'antd'
import { RichText } from 'prismic-reactjs'

import { linkResolver } from 'utils/link-resolver'
import { Card } from 'systems/Core'
import * as st from './styled'

export const IntegrationBox = ({ integration }) => {
  const title = integration.title[0].text
  const description = RichText.render(integration.description, linkResolver)
  const plan = integration.plan.title[0].text
  const link = integration.link && integration.link.url

  return (
    <st.Card>
      <Card.Title>{title}</Card.Title>
      <Card.Body css={st.body}>{description}</Card.Body>
      <div css={st.infos}>
        <st.Info>
          <st.Label>Type:</st.Label>
          <st.Value>{integration.type}</st.Value>
        </st.Info>
        <st.Info>
          <st.Label>Plan:</st.Label>
          <st.Value>{plan}</st.Value>
        </st.Info>
      </div>
      {link && (
        <Button size="large" type="primary" onClick={() => window.open(link)}>
          Learn more
        </Button>
      )}
    </st.Card>
  )
}
