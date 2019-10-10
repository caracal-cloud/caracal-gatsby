const pages = require('./src/data/pages.json')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const component = page.path.slice(1, -1)
  const item = pages.find(page => page.component === component)

  if (item) {
    const oldPage = { ...page }
    page.path = item.path
    page.context = item.context
    deletePage(oldPage)
    createPage(page)
  }
}
