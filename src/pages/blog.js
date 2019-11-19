import React from "react"
import {graphql} from "gatsby"

import {PostList} from "../components/post-list"
import Layout from "../components/layout"
import SEO from "../components/seo"

class TutorialIndex extends React.Component {
  render() {
    const {data} = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO title="Blog" />
        <PostList title="Blog" posts={posts} />
      </Layout>
    )
  }
}

export default TutorialIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {category: {ne: "tutorial"}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 240)
          fields {
            slug
            path
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            image
          }
        }
      }
    }
  }
`
