import React from 'react'

import { MainLayout } from 'layouts/Main'
import { Seo } from 'systems/Core'
import { Pricing } from 'systems/Pricing'

const PricingPage = ({ pageContext: ctx }) => (
  <MainLayout>
    <Seo title={ctx.title} />
    <Pricing title={ctx.title} />
  </MainLayout>
)

export default PricingPage
