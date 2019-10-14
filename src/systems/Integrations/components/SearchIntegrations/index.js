import React, { useState } from 'react'
import { Input } from 'antd'
import { graphql, useStaticQuery, navigate } from 'gatsby'
import match from 'match-sorter'

import * as st from './styled'

const query = graphql`
  query SearchIntegrationsQuery {
    prismic {
      allApplications(sortBy: title_ASC) {
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
export const SearchIntegrations = () => {
  const data = useStaticQuery(query)
  const { edges: applications } = data.prismic.allApplications
  const [integrations, setIntegrations] = useState(applications)
  const [search, setSearch] = useState('')

  function handleSearch(ev) {
    const { value } = ev.target
    const opts = { keys: ['node.title'] }
    const newItems = match(applications, value, opts)
    setIntegrations(newItems)
    setSearch(value)
  }

  return (
    <div>
      <st.Title>Search</st.Title>
      <st.Card>
        <st.Header>
          <Input.Search size="large" value={search} onChange={handleSearch} />
        </st.Header>
        <st.Integrations>
          {integrations.map(({ node }) => (
            <st.IntegrationRow
              key={node._meta.id}
              onClick={() => navigate(`/integrations/${node._meta.uid}`)}
            >
              <st.IntegrationThumb>
                <img alt={node.title[0].text} src={node.thumb.url} />
              </st.IntegrationThumb>
              <div>
                <st.IntegrationTitle>{node.title[0].text}</st.IntegrationTitle>
                <st.IntegrationSubtitle>
                  {node.type} | {node.plan.title[0].text}
                </st.IntegrationSubtitle>
              </div>
            </st.IntegrationRow>
          ))}
        </st.Integrations>
      </st.Card>
    </div>
  )
}
