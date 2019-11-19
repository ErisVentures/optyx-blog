import React from "react"
import {Link, graphql} from "gatsby"
import Image from "gatsby-image"

import {PostList} from "../components/post-list"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const {data} = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <div className="hero" style={{position: "relative"}}>
          <Image
            style={{height: "60vh", minHeight: 400}}
            imgStyle={{height: "60vh", minHeight: 400, objectFit: "cover"}}
            fluid={data.hero.childImageSharp.fluid}
          />
          <h1
            style={{
              position: "absolute",
              marginTop: 0,
              borderBottom: 0,
              top: "50%",
              left: 0,
              right: 0,
              transform: "translateY(-50%",
              padding: "calc(var(--base-spacing) * 2)",
            }}
          >
            <div className="container">
              Cull less. <br /> Shoot more.
            </div>
          </h1>
        </div>
        <div
          className="story"
          style={{
            width: "100%",
            padding: "calc(var(--base-spacing) * 4)",
            background: "var(--theme-color)",
            color: "white",
          }}
        >
          <div className="container">
            <p style={{fontSize: 24, lineHeight: "40px"}}>
              Optyx is the AI photo manager you always wished you had. Automatically categorize,
              rate, and cull photos with advanced artificial intelligence. All processing happens
              on-device and is metadata-compatible with your other tools like Lightroom.
            </p>
          </div>
        </div>
        <PostList title="Latest Posts" posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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
    hero: file(absolutePath: {regex: "/homepage-hero.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
