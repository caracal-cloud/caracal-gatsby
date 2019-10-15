import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import GatsbyImage from 'gatsby-image'

const Image = styled(GatsbyImage)`
  width: 150px;
`

export const Logo = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Image fluid={data.file.childImageSharp.fluid} {...props} />
}
