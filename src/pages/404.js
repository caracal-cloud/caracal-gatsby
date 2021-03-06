import React from 'react'

import { MainLayout } from 'layouts/Main'
import { Seo } from 'systems/Core'

const NotFoundPage = () => (
  <MainLayout>
    <Seo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </MainLayout>
)

export default NotFoundPage
