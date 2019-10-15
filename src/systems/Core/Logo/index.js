import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const Image = styled.img`
  margin: 0;
  width: 150px;
`

export const Logo = props => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fluid: { src: { regex: "/logo.png/" } }) {
        fluid(maxWidth: 150) {
          src
        }
      }
    }
  `)

  return <Image src={data.imageSharp.fluid.src} {...props} />
}
