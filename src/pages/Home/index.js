import React from 'react'

import { MainLayout } from 'layouts/Main'
import { Seo } from 'systems/Core'

import { Hero } from './components/Hero'

const IndexPage = ({ pageContext: ctx }) => (
  <MainLayout>
    <Seo title={ctx.title} />
    <Hero />
  </MainLayout>
)

export default IndexPage
