import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Button, Dropdown, Menu as AntdMenu, Icon } from 'antd'

import * as st from './styled'

const APP_URL = 'https://app.caracal.cloud'

const menuQuery = graphql`
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
`

export const Menu = () => {
  const data = useStaticQuery(menuQuery)
  const userMenu = (
    <AntdMenu>
      <AntdMenu.Item key="1" onClick={() => window.open(APP_URL)}>
        <Icon type="login" /> Login
      </AntdMenu.Item>
      <AntdMenu.Item
        key="2"
        onClick={() => window.open(`${APP_URL}/register/`)}
      >
        <Icon type="plus-circle" /> Register
      </AntdMenu.Item>
    </AntdMenu>
  )

  return (
    <st.List>
      {data.allPagesJson.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.path} activeClassName="active">
            {node.context.title}
          </Link>
        </li>
      ))}
      <li>
        <Dropdown size="small" placement="bottomRight" overlay={userMenu}>
          <Button shape="circle" type="primary">
            <Icon type="user" />
          </Button>
        </Dropdown>
      </li>
    </st.List>
  )
}
