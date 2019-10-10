import React from 'react'
import { useStaticQuery, navigate, graphql } from 'gatsby'
import Image from 'gatsby-image/withIEPolyfill'

import { Container } from 'systems/Core'
import * as st from './styled'
import { Button } from 'antd'

export const Hero = () => {
  const heroImg = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "elephant.png" }) {
        childImageSharp {
          fixed(width: 600, height: 460) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <st.Wrapper>
      <Container css={st.container}>
        <st.Info>
          <st.Title>Automate</st.Title>
          <st.Title>Analyze</st.Title>
          <st.Title>ACT</st.Title>
          <st.Subtitle>
            Automate your geospacial data flows and tap into the tools that
            enable in-depth analysis.
          </st.Subtitle>
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
            fixed={heroImg.placeholderImage.childImageSharp.fixed}
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </st.ImageWrapper>
      </Container>
    </st.Wrapper>
  )
}
