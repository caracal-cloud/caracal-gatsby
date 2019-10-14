import React from 'react'
import { useStaticQuery, navigate, graphql } from 'gatsby'
import { Button } from 'antd'
import Image from 'gatsby-image/withIEPolyfill'

import { Container } from 'systems/Core'
import * as st from './styled'

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query HomeHeroQuery {
      heroImg: file(relativePath: { eq: "elephant.png" }) {
        childImageSharp {
          fixed(width: 600, height: 460) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      prismic {
        allHomepages {
          edges {
            node {
              hero_text
              hero_title
            }
          }
        }
      }
    }
  `)

  const first = data.prismic.allHomepages.edges[0].node
  const { hero_title, hero_text } = first

  return (
    <st.Wrapper>
      <Container css={st.container}>
        <st.Info>
          <st.Title>{hero_title[0].text}</st.Title>
          <st.Subtitle>{hero_text[0].text}</st.Subtitle>
          <Button
            size="large"
            type="primary"
            onClick={() => navigate('/register')}
          >
            Get started
          </Button>
        </st.Info>
        <st.ImageWrapper>
          <Image
            fixed={data.heroImg.childImageSharp.fixed}
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </st.ImageWrapper>
      </Container>
    </st.Wrapper>
  )
}
