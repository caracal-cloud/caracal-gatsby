import React, { useState } from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Input } from 'antd'
import match from 'match-sorter'

import * as st from './styled'

const SearchContainer = ({ data, noTitle, selected }) => {
  const { edges: applications } = data.prismic.allApplications
  const [integrations, setIntegrations] = useState(applications)
  const [search, setSearch] = useState('')

  function handleSearch(ev) {
    const { value } = ev.target
    const opts = { keys: ['node.title.0.text'] }
    const newItems = match(applications, value, opts)
    setIntegrations(newItems)
    setSearch(value)
  }

  return (
    <div>
      {!noTitle && <st.Title>Search</st.Title>}
      <st.Card>
        <st.Header>
          <Input.Search size="large" value={search} onChange={handleSearch} />
        </st.Header>
        <st.Integrations>
          {integrations.map(({ node }) => {
            const title = node.title[0].text
            const plan = node.plan.title[0].text
            const isSelected = node._meta.uid === selected

            return (
              <Link to={`/integrations/${node._meta.uid}`}>
                <st.IntegrationRow key={node._meta.id} selected={isSelected}>
                  <st.IntegrationThumb>
                    <img alt={title} src={node.thumb.url} />
                  </st.IntegrationThumb>
                  <div>
                    <st.IntegrationTitle selected={isSelected}>
                      {title}
                    </st.IntegrationTitle>
                    <st.IntegrationSubtitle>
                      {node.type} | {plan}
                    </st.IntegrationSubtitle>
                  </div>
                </st.IntegrationRow>
              </Link>
            )
          })}
        </st.Integrations>
      </st.Card>
    </div>
  )
}

export const SearchIntegrations = props => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => {
        return <SearchContainer data={data} {...props} />
      }}
    />
  )
}
