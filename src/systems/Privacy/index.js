import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import { linkResolver } from 'utils/link-resolver'
import { SectionTitle, Container } from 'systems/Core'
import * as st from './styled'

const query = graphql`
  query PrivacyPageQuery {
    prismic {
      allPrivacys {
        edges {
          node {
            body
          }
        }
      }
    }
  }
`

export const Privacy = ({ title }) => {
  const data = useStaticQuery(query)
  const { body } = data.prismic.allPrivacys.edges[0].node

  return (
    <st.Wrapper>
      <SectionTitle bg="lightGray.0">
        <SectionTitle.Text color="gray.0">{title}</SectionTitle.Text>
      </SectionTitle>
      <Container>{RichText.render(body, linkResolver)}</Container>
    </st.Wrapper>
  )
}
