import React from 'react'
import { Link, navigate } from 'gatsby'
import { Button, Dropdown, Menu as AntdMenu, Icon } from 'antd'

import * as st from './styled'

export const Menu = () => {
  const userMenu = (
    <AntdMenu>
      <AntdMenu.Item
        key="1"
        onClick={() => window.open('https://app.caracal.cloud')}
      >
        <Icon type="login" /> Login
      </AntdMenu.Item>
      <AntdMenu.Item key="2" onClick={() => navigate('/register')}>
        <Icon type="plus-circle" /> Register
      </AntdMenu.Item>
    </AntdMenu>
  )

  return (
    <st.List>
      <li>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/integrations" activeClassName="active">
          Integrations
        </Link>
      </li>
      <li>
        <Link to="/pricing" activeClassName="active">
          Pricing
        </Link>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer noopen"
          href="https://app.caracal.cloud"
        >
          Demo
        </a>
      </li>
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
