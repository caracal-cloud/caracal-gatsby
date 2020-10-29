import React from 'react'

import { MainLayout } from 'layouts/Main'
import { Seo } from 'systems/Core'
import { Contact } from 'systems/Contact'

const ContactPage = () => {
  return (
    <MainLayout>
      <Seo title="Contact Us" />
      <Contact />
    </MainLayout>
  )
}

export default ContactPage
