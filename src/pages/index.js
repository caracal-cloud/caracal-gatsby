import React from 'react'

import { MainLayout } from 'layouts/Main'
import { Seo } from 'systems/Core'

import { Applications, Hero, HowItWorks, Partners } from 'systems/Home'

const IndexPage = ({ pageContext: ctx }) => (
  <MainLayout>
    <Seo title={ctx.title} />
    <Hero />
    <HowItWorks />
    <Applications />
    <Partners />
  </MainLayout>
)

export default IndexPage
