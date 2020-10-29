exports.linkResolver = function linkResolver(doc) {
  // Route for blog posts
  if (doc.type === 'application') {
    return '/integrations/' + doc.uid
  }

  // Homepage route fallback
  return '/'
}
