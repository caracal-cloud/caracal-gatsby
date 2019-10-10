import React from 'react'

import { MainLayout } from 'layouts/Main'
import { Seo } from 'systems/Core'

const IndexPage = () => (
  <MainLayout>
    <Seo title="Home" />
  </MainLayout>
)

export default IndexPage
