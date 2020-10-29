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
            fluid(maxWidth: 150) {
              src
            }
          }
        }
      `}
      render={data => <Image src={data.imageSharp.fluid.src} {...props} />}
    />
  )
}
