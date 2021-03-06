import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Button } from 'antd'

import { Container } from 'systems/Core'
import * as st from './styled'

import { useWindowDimensions } from '../../../WindowDimensionsProvider'

export const Hero = () => {
  const { isDesktop } = useWindowDimensions()

  return (
    <StaticQuery
      query={graphql`
        query HomeHeroQuery {
          imageSharp(fluid: { src: { regex: "/elephant.png/" } }) {
            fluid(maxWidth: 600) {
              src
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
      `}
      render={data => {
        const first = data.prismic.allHomepages.edges[0].node
        const { hero_title, hero_text } = first

        return (
          <st.Wrapper isDesktop={isDesktop}>
            <Container css={st.Container}>
              <st.Info isDesktop={isDesktop}>
                <st.Title>{hero_title[0].text}</st.Title>
                <st.Subtitle>{hero_text[0].text}</st.Subtitle>
                <Button
                  style={{ maxWidth: 200 }}
                  size="large"
                  type="primary"
                  href="https://app.caracal.cloud/register"
                  target="_blank"
                >
                  GET STARTED
                </Button>
              </st.Info>

              <st.ImageWrapper isDesktop={isDesktop}>
                <img src={data.imageSharp.fluid.src} alt="Elephant" />
              </st.ImageWrapper>
            </Container>
          </st.Wrapper>
        )
      }}
    />
  )
}
