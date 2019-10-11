const pages = require('./src/data/pages.json')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const path = page.path.slice(0)
  const item = pages.find(page => page.path === path)

  if (item) {
    const oldPage = { ...page }
    page.path = item.path
    page.context = item.context
    deletePage(oldPage)
    createPage(page)
  }
}
