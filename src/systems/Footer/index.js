import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Icon } from 'antd'

import * as st from './styled'

import { useWindowDimensions } from '../WindowDimensionsProvider'

export const Footer = () => {
  const { isDesktop } = useWindowDimensions()

  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => (
        <st.Wrapper>
          <st.Container isDesktop={isDesktop}>
            <div>
              <st.Copyright>© 2020 Caracal Ltd.</st.Copyright>
            </div>

            <div>
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
            </div>

            <div>
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
            </div>
          </st.Container>
        </st.Wrapper>
      )}
    />
  )
}
