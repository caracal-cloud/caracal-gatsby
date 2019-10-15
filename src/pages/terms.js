import React from 'react'

import { MainLayout } from 'layouts/Main'
import { Seo } from 'systems/Core'
import { Terms } from 'systems/Terms'

const TermsPage = ({ pageContext: ctx }) => {
  return (
    <MainLayout>
      <Seo title={ctx.title} />
      <Terms title={ctx.title} />
    </MainLayout>
  )
}

export default TermsPage
