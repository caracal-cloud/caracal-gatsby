import React from 'react'

import { MainLayout } from 'layouts/Main'
import { Seo } from 'systems/Core'

import { Hero } from 'screens/Home/components/Hero'
import { HowItWorks } from 'screens/Home/components/HowItWorks'

const IndexPage = ({ pageContext: ctx }) => (
  <MainLayout>
    <Seo title={ctx.title} />
    <Hero />
    <HowItWorks />
  </MainLayout>
)

export default IndexPage
