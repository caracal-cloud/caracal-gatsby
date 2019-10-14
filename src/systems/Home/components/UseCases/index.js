import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as st from './styled'

const query = graphql`
  query UseCasesQuery {
    toGsArcgis: imageSharp(fluid: { src: { regex: "/to-gs-arcgis/" } }) {
      fluid {
        src
      }
    }
    toSatGe: imageSharp(fluid: { src: { regex: "/to-sat-ge/" } }) {
      fluid {
        src
      }
    }
    toCodeSms: imageSharp(fluid: { src: { regex: "/to-code-sms/" } }) {
      fluid {
        src
      }
    }
  }
`

export const UseCases = () => {
  const { toGsArcgis, toSatGe, toCodeSms } = useStaticQuery(query)

  return (
    <div>
      <st.Title>UseCases</st.Title>
      <st.Card>
        <img
          width={200}
          alt="Google Sheets to Arcgis Online"
          src={toGsArcgis.fluid.src}
        />
        <p>
          Sync your Google Sheets documents with an ArcGIS Online web layer.
          Contextualize your reporting with ArcGIS's rich set of base maps and
          analysitical features.
        </p>
      </st.Card>
      <st.Card>
        <img
          width={200}
          alt="TRBOnet to Google Earth"
          src={toSatGe.fluid.src}
        />
        <p>
          Connect your TRBOnet radio dispatch solution our desktop software.
          Caracal Sync. Visualize your radios in Google Earth with real-time
          Network KML files.
        </p>
      </st.Card>
      <st.Card>
        <img
          width={200}
          alt="HTML API to SMS Alert"
          src={toCodeSms.fluid.src}
        />
        <p>
          Send real-time data from your own mobile app and set mobility alert
          parameters. Receive automatic SMS alert messages.
        </p>
      </st.Card>
    </div>
  )
}
