import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { SectionTitle } from 'systems/Core'
import * as st from './styled'

const query = graphql`
  query HomePartnersQuery {
    prismic {
      allHomepages {
        edges {
          node {
            partners {
              logo
              title
              url {
                ... on PRISMIC__ExternalLink {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

export const Partners = () => {
  const data = useStaticQuery(query)
  const { partners } = data.prismic.allHomepages.edges[0].node

  return (
    <st.Wrapper>
      <SectionTitle color="dark.0" margin={4}>
        Partners
      </SectionTitle>
      <st.Container>
        {partners.map((partner, idx) => (
          <a
            key={idx}
            href={partner.url.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={partner.logo.url}
              width={partner.logo.dimensions.width}
              height={partner.logo.dimensions.height}
              alt={partner.title}
            />
          </a>
        ))}
      </st.Container>
    </st.Wrapper>
  )
}
