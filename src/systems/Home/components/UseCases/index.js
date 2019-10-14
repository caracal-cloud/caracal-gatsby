import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as st from './styled'

const query = graphql`
  query HomeUseCasesQuery {
    prismic {
      allHomepages {
        edges {
          node {
            use_cases {
              text
              thumb
            }
          }
        }
      }
    }
  }
`

export const UseCases = () => {
  const data = useStaticQuery(query)
  const first = data.prismic.allHomepages.edges[0].node
  const { use_cases } = first

  return (
    <div>
      <st.Title>UseCases</st.Title>
      {use_cases.map((node, idx) => (
        <st.Card key={idx}>
          <img width={200} alt={node.thumb.alt} src={node.thumb.url} />
          <p>{node.text[0].text}</p>
        </st.Card>
      ))}
    </div>
  )
}
