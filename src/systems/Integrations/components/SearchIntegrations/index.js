import React, { useState } from 'react'
import { Input } from 'antd'
import { graphql, useStaticQuery, navigate } from 'gatsby'
import match from 'match-sorter'

import { Card } from 'systems/Core'
import * as st from './styled'

const query = graphql`
  query SearchIntegrationsQuery {
    allIntegrationsJson {
      edges {
        node {
          id
          title
          type
          plan
          thumb
          path
        }
      }
    }
    allImageSharp {
      edges {
        node {
          resize(width: 60, height: 60) {
            src
          }
        }
      }
    }
  }
`

const getImageSrc = (path, nodes) => {
  const found = nodes.find(({ node }) => node.resize.src.includes(path))
  return found.node.resize.src
}

export const SearchIntegrations = () => {
  const { allImageSharp, allIntegrationsJson } = useStaticQuery(query)
  const [integrations, setIntegrations] = useState(allIntegrationsJson.edges)
  const [search, setSearch] = useState('')

  function handleSearch(ev) {
    const { value } = ev.target
    const opts = { keys: ['node.title'] }
    const newItems = match(allIntegrationsJson.edges, value, opts)
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
              key={node.id}
              onClick={() => navigate(node.path)}
            >
              <st.IntegrationThumb>
                <img
                  alt={node.title}
                  src={getImageSrc(node.thumb, allImageSharp.edges)}
                />
              </st.IntegrationThumb>
              <div>
                <st.IntegrationTitle>{node.title}</st.IntegrationTitle>
                <st.IntegrationSubtitle>
                  {node.type} | {node.plan}
                </st.IntegrationSubtitle>
              </div>
            </st.IntegrationRow>
          ))}
        </st.Integrations>
      </st.Card>
    </div>
  )
}
