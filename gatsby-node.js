const path = require('path')
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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      prismic {
        allApplications(sortBy: title_ASC) {
          edges {
            node {
              _meta {
                id
                uid
              }
              description
              thumb
              title
              type
              plan {
                ... on PRISMIC_Plan {
                  title
                  price
                }
              }
              link {
                ... on PRISMIC__ExternalLink {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)
  result.data.prismic.allApplications.edges.forEach(({ node }, idx) => {
    const page = {
      path: `/integrations/${node._meta.uid}`,
      component: path.resolve('./src/templates/Integration/index.js'),
      context: {
        title: node.title[0].text,
        uid: node._meta.uid,
      },
    }

    if (idx === 0) {
      createPage({
        ...page,
        path: '/integrations',
      })
    }

    createPage(page)
  })
}
