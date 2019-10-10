const pages = {
  Home: {
    path: '/',
    context: {
      title: 'Home',
    },
  },
  Integrations: {
    path: '/integrations',
    context: {
      title: 'Integrations',
    },
  },
  Pricing: {
    path: '/pricing',
    context: {
      title: 'Pricing',
    },
  },
  Register: {
    path: '/register',
    context: {
      title: 'Register',
    },
  },
  Privacy: {
    path: '/privacy',
    context: {
      title: 'Privacy',
    },
  },
  Terms: {
    path: '/terms',
    context: {
      title: 'Terms of Service',
    },
  },
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const component = page.path.slice(1, -1)
  const item = pages[component]

  if (item) {
    const oldPage = { ...page }
    page.path = item.path
    page.context = item.context
    deletePage(oldPage)
    createPage(page)
  }
}
