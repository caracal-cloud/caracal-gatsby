import React from 'react'

import { ReactComponent as Illustration } from 'images/how-it-works.svg'
import { Card } from 'systems/Core'
import * as st from './styled'

export const HowItWorks = () => {
  return (
    <st.Container>
      <st.IllustrationWrapper>
        <Illustration />
      </st.IllustrationWrapper>
      <Card>
        <Card.Title>Sources</Card.Title>
        <Card.Body>
          <Card.Subtitle>Third-party sources</Card.Subtitle>
          <span>
            Collect data from your favorite tools such as Google Sheets, TRBOnet
            and Orbcomm satellite collars.
          </span>
          <Card.Subtitle>REST API</Card.Subtitle>
          <span>
            Collect and distribute your own geospatial data by integrating with
            the real-time REST API.
          </span>
        </Card.Body>
      </Card>
      <Card>
        <Card.Title>Centre</Card.Title>
        <Card.Body>
          <Card.Subtitle>Data management</Card.Subtitle>
          <span>
            View and manage your tracked devices. Assign attributes to
            individuals such as call-sign, blood type and phone number.
          </span>
          <Card.Subtitle>Alerts</Card.Subtitle>
          <span>
            View connection and mobility alerts. Manage alert recipients.
          </span>
        </Card.Body>
      </Card>
      <Card>
        <Card.Title>Destinations</Card.Title>
        <Card.Body>
          <Card.Subtitle>Cloud GIS</Card.Subtitle>
          <span>
            Send your data to ArcGIS Online and automatically receive
            feature-rich web layers. Download auto-generated Network KML files.
          </span>
          <Card.Subtitle>Reporting</Card.Subtitle>
          <span>Receive automatic alerts via email or SMS.</span>
        </Card.Body>
      </Card>
    </st.Container>
  )
}
