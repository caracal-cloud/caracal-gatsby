import React from 'react'
import { graphql } from 'gatsby'

import { MainLayout } from 'layouts/Main'
import { SectionTitle, Seo } from 'systems/Core'
import { IntegrationBox, SearchIntegrations } from 'systems/Integrations'

import WindowDimensionsProvider, {
  WindowDimensionsCtx,
} from '../../systems/WindowDimensionsProvider'

import * as st from './styled'

const IntegrationPage = ({ pageContext: ctx, data }) => {
  const { edges } = data.prismic.allApplications

  if (edges.length === 0) {
    return null
  }

  return (
    <WindowDimensionsProvider>
      <WindowDimensionsCtx.Consumer>
        {({ isDesktop }) => (
          <MainLayout>
            <Seo title={ctx.title} />
            <st.Wrapper isDesktop={isDesktop}>
              <SectionTitle bg="lightGray.0" isDesktop={isDesktop}>
                <SectionTitle.Text color="gray.0" isDesktop={isDesktop}>
                  Integrations
                </SectionTitle.Text>
              </SectionTitle>
              <st.Container isDesktop={isDesktop}>
                <SearchIntegrations noTitle selected={ctx.uid} />
                <IntegrationBox integration={edges[0].node} />
              </st.Container>
            </st.Wrapper>
          </MainLayout>
        )}
      </WindowDimensionsCtx.Consumer>
    </WindowDimensionsProvider>
  )
}

export const query = graphql`
  query IntegrationPageQuery($uid: String!) {
    prismic {
      allApplications(uid: $uid) {
        edges {
          node {
            _meta {
              id
              uid
            }
            description
            thumb
            title
            type
            plan {
              ... on PRISMIC_Plan {
                title
                price
              }
            }
            link {
              ... on PRISMIC__ExternalLink {
                url
              }
            }
          }
        }
      }
    }
  }
`

export default IntegrationPage
