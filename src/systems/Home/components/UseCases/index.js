import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import * as st from './styled'

export const UseCases = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => {
      const first = data.prismic.allHomepages.edges[0].node
      const { use_cases } = first

      return (
        <st.Wrapper>
          <st.Title>Use Cases</st.Title>
          {use_cases.map((node, idx) => (
            <st.Card key={idx}>
              <img width={200} alt={node.thumb.alt} src={node.thumb.url} />
              <p>{node.text[0].text}</p>
            </st.Card>
          ))}
        </st.Wrapper>
      )
    }}
  />
)
