import React from 'react'

import { MainLayout } from 'layouts/Main'
import { Seo } from 'systems/Core'

import { Applications, Hero, HowItWorks } from 'systems/Home'

const IndexPage = ({ pageContext: ctx }) => (
  <MainLayout>
    <Seo title={ctx.title} />
    <Hero />
    <HowItWorks />
    <Applications />
  </MainLayout>
)

export default IndexPage
