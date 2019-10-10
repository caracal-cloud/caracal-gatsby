import React from 'react'

import { MainLayout } from 'layouts/Main'
import { Seo } from 'systems/Core'

const PolicyAndTermsPage = ({ pageContext: ctx }) => (
  <MainLayout>
    <Seo title={ctx.title} />
  </MainLayout>
)

export default PolicyAndTermsPage
