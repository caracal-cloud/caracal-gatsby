import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import { linkResolver } from 'utils/link-resolver'
import { SectionTitle, Container } from 'systems/Core'
import * as st from './styled'

export const Terms = ({ title }) => (
  <StaticQuery
    query={graphql`
      query TermsPageQuery {
        prismic {
          allTermss {
            edges {
              node {
                body
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { body } = data.prismic.allTermss.edges[0].node

      return (
        <st.Wrapper>
          <SectionTitle bg="lightGray.0">
            <SectionTitle.Text color="gray.0">{title}</SectionTitle.Text>
          </SectionTitle>
          <Container>{RichText.render(body, linkResolver)}</Container>
        </st.Wrapper>
      )
    }}
  />
)
