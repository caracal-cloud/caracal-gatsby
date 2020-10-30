import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const Image = styled.img`
  margin: 0;
  width: 150px;
`

export const Logo = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          imageSharp(fluid: { src: { regex: "/logo.png/" } }) {
            fluid(maxWidth: 250, quality: 100) {
              src
            }
          }
        }
      `}
      render={data => <Image src={data.imageSharp.fluid.src} {...props} />}
    />
  )
}
