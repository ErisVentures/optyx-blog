const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
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
  const tutorialPosts = posts.filter(post => post.node.frontmatter.category === "tutorial")
  const nontutorialPosts = posts.filter(post => post.node.frontmatter.category !== "tutorial")
  tutorialPosts.forEach((post, index) => {
    const previous = index === tutorialPosts.length - 1 ? null : tutorialPosts[index + 1].node
    const next = index === 0 ? null : tutorialPosts[index - 1].node

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
  nontutorialPosts.forEach((post, index) => {
    const previous = index === nontutorialPosts.length - 1 ? null : nontutorialPosts[index + 1].node
    const next = index === 0 ? null : nontutorialPosts[index - 1].node

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

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions

  if (node.internal.type === `MarkdownRemark`) {
    const filename = createFilePath({node, getNode}).slice(1)
    const date = new Date(node.frontmatter.date || "2020-01-01")
    const slug = `/${date.getFullYear()}/${("0" + (date.getMonth() + 1)).slice(-2)}/${filename}`
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
    createNodeField({
      name: `path`,
      node,
      value: `/posts${slug}`,
    })
  }
}
