import React from 'react'
import { Link, navigate } from 'gatsby'
import { Button } from 'antd'

import * as st from './styled'

export const Menu = () => {
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
        <Link to="/policy" activeClassName="active">
          Policy
        </Link>
      </li>
      <li>
        <Link to="/terms" activeClassName="active">
          Terms
        </Link>
      </li>
      <li>
        <Button
          type="primary"
          onClick={() => window.open('https://app.caracal.cloud')}
        >
          Sign in
        </Button>
      </li>
    </st.List>
  )
}
