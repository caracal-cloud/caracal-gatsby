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
  PolicyAndTerms: {
    path: '/policy-and-terms',
    context: {
      title: 'Policy and Terms',
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
