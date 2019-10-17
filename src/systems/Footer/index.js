import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Icon } from 'antd'

import * as st from './styled'

const menuQuery = graphql`
  query FooterPages {
    allPagesJson(filter: { place: { eq: "footer" } }) {
      edges {
        node {
          id
          path
          context {
            title
          }
        }
      }
    }
  }
`

export const Footer = () => {
  const data = useStaticQuery(menuQuery)
  return (
    <st.Wrapper>
      <st.Container>
        <st.Copyright>© 2020 Caracal LTD.</st.Copyright>
        <st.Menu>
          <li>
            <a
              href="https://app.caracal.cloud/register/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </a>
          </li>
          {data.allPagesJson.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.path} activeClassName="active">
                {node.context.title}
              </Link>
            </li>
          ))}
        </st.Menu>
        <st.SocialIcons>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com"
            >
              <Icon type="linkedin" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com"
            >
              <Icon type="instagram" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com"
            >
              <Icon type="github" />
            </a>
          </li>
        </st.SocialIcons>
      </st.Container>
    </st.Wrapper>
  )
}
