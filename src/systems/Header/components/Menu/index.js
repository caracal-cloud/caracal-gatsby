import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Icon, Dropdown, Menu as AntdMenu, Button } from 'antd'

import * as st from './styled'

const APP_URL = 'https://app.caracal.cloud'

export const Menu = () => {
  return (
    <StaticQuery
      query={graphql`
        query HeaderPages {
          allPagesJson(filter: { place: { eq: "header" } }) {
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
        <st.List>
          {data.allPagesJson.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.path} activeClassName="active">
                {node.context.title}
              </Link>
            </li>
          ))}
          <li>
            <Dropdown
              size="small"
              placement="bottomRight"
              overlay={
                <AntdMenu>
                  <AntdMenu.Item
                    key="1"
                    onClick={() =>
                      typeof window !== 'undefined' && window.open(APP_URL)
                    }
                  >
                    <Icon type="login" /> Login
                  </AntdMenu.Item>
                  <AntdMenu.Item
                    key="2"
                    onClick={() =>
                      typeof window !== 'undefined' &&
                      window.open(`${APP_URL}/register/`)
                    }
                  >
                    <Icon type="plus-circle" /> Register
                  </AntdMenu.Item>
                </AntdMenu>
              }
            >
              <Button shape="circle" type="primary">
                <Icon type="user" />
              </Button>
            </Dropdown>
          </li>
        </st.List>
      )}
    />
  )
}
