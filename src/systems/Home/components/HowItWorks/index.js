import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { ReactComponent as Illustration } from 'images/how-it-works.svg'
import { Card } from 'systems/Core'
import * as st from './styled'

const query = graphql`
  query HowItWorksQuery {
    prismic {
      allHomepages {
        edges {
          node {
            how_it_works_boxes {
              first_block_text
              first_block_title
              order
              second_block_text
              second_block_title
              title
            }
          }
        }
      }
    }
  }
`

export const HowItWorks = () => {
  const data = useStaticQuery(query)
  const { how_it_works_boxes } = data.prismic.allHomepages.edges[0].node

  return (
    <st.Container>
      <st.IllustrationWrapper>
        <Illustration />
      </st.IllustrationWrapper>
      {how_it_works_boxes.map((box, idx) => (
        <Card key={idx}>
          <Card.Title>{box.title}</Card.Title>
          <Card.Body>
            <Card.Subtitle>{box.first_block_title}</Card.Subtitle>
            <span>{box.first_block_text[0].text}</span>
            <Card.Subtitle>{box.second_block_title}</Card.Subtitle>
            <span>{box.second_block_text[0].text}</span>
          </Card.Body>
        </Card>
      ))}
    </st.Container>
  )
}
