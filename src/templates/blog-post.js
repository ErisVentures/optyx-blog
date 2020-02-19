import React from 'react'
import {Link, graphql} from 'gatsby'
import Image from 'gatsby-image'

import Bio from '../components/author-bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {rhythm, scale} from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const {previous, next} = this.props.pageContext

    let photoHeader = <></>
    if (post.frontmatter.imageCredit && post.frontmatter.image) {
      const unsplashMatch = post.frontmatter.imageCredit.match(/@(\S+).*Unsplash/)
      const photoByline = unsplashMatch ? (
        <figcaption style={{fontSize: 14}}>
          Photo by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://unsplash.com/@${unsplashMatch[1]}`}
          >
            @{unsplashMatch[1]} on Unsplash
          </a>
        </figcaption>
      ) : (
        post.frontmatter.imageCredit
      )

      photoHeader = (
        <div>
          <figure className="photo-header">
            <Image
              fluid={post.frontmatter.image.childImageSharp.fluid}
              style={{width: '100%', maxHeight: 400, objectFit: 'cover'}}
            />
            {photoByline}
          </figure>
        </div>
      )
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article className="container article-container">
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
            {photoHeader}
          </header>
          <section dangerouslySetInnerHTML={{__html: post.html}} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio author={post.frontmatter.author} />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.path} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.path} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageCredit
      }
    }
  }
`
