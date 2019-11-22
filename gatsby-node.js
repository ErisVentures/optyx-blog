const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

function createPostPages(createPage, posts) {
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.path,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
          edges {
            node {
              fields {
                slug
                path
              }
              frontmatter {
                title
                category
                pinnedPosition
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges
  const tutorialPosts = posts
    .filter(post => post.node.frontmatter.category === 'tutorial')
    .sort((a, b) => b.node.frontmatter.pinnedPosition - a.node.frontmatter.pinnedPosition)
  const nontutorialPosts = posts.filter(post => post.node.frontmatter.category !== 'tutorial')
  createPostPages(createPage, tutorialPosts)
  createPostPages(createPage, nontutorialPosts)
}

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions

  if (node.internal.type === `MarkdownRemark`) {
    const filename = createFilePath({node, getNode})
      .replace(/^\/\d{4}-\d{1,2}-\d{1,2}\-?/, '')
      .replace(/^\//, '')
      .replace(/\/$/, '')
    const date = new Date(node.frontmatter.date || '2020-01-01')
    const slug =
      node.frontmatter.category === 'tutorial'
        ? filename
        : `${date.getFullYear()}/${('0' + (date.getMonth() + 1)).slice(-2)}/${filename}`
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
    createNodeField({
      name: `path`,
      node,
      value: node.frontmatter.category === 'tutorial' ? `/tutorials/${slug}/` : `/posts/${slug}/`,
    })
  }
}
