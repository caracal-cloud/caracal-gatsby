import React from 'react'

import { MainLayout } from 'layouts/Main'
import { Seo } from 'systems/Core'
import { Privacy } from 'systems/Privacy'

const PrivacyPage = ({ pageContext: ctx }) => (
  <MainLayout>
    <Seo title={ctx.title} />
    <Privacy title={ctx.title} />
  </MainLayout>
)

export default PrivacyPage
