import React from 'react'
import {Link, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'
import {rhythm} from '../utils/typography'

export const PostList = ({title = 'Posts', posts, inverted}) => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      postImage: file(absolutePath: {regex: "/homepage-hero.jpg/"}) {
        childImageSharp {
          fixed(width: 400, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const imgWrapStyle = {maxWidth: 400, width: 'calc(100% - 2 * var(--base-spacing))', height: 250}
  const imgStyle = {...imgWrapStyle, width: '100%'}
  return (
    <div className="container p-4">
      <h2
        style={
          inverted
            ? {color: 'var(--inverted-text-color)', borderColor: 'var(--inverted-text-color)'}
            : {}
        }
      >
        {title}
      </h2>
      {posts.map(({node}) => {
        const title = node.frontmatter.title
        return (
          <article
            key={node.fields.path}
            className="p-2 post-list__article"
            style={{
              display: 'flex',
              marginTop: 'calc(var(--base-spacing) * 2)',
              background: 'white',
            }}
          >
            <div className="m-2" style={{...imgWrapStyle, position: 'relative', flexShrink: 0}}>
              {node.frontmatter.image ? (
                <img
                  src={node.frontmatter.image}
                  style={{
                    ...imgStyle,
                    objectFit: 'cover',
                    marginBottom: 0,
                  }}
                />
              ) : (
                <Image
                  style={imgStyle}
                  imgStyle={imgStyle}
                  fixed={data.postImage.childImageSharp.fixed}
                />
              )}
              <small
                className="p-2"
                style={{
                  fontWeight: 'bold',
                  position: 'absolute',
                  bottom: 0,
                  background: 'white',
                  left: 0,
                }}
              >
                {node.frontmatter.category === 'tutorial' ? 'TUTORIAL' : node.frontmatter.date}
              </small>
            </div>
            <section className="p-2">
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{
                    color: 'var(--base-text-color)',
                    textDecoration: 'none',
                    boxShadow: `none`,
                  }}
                  to={node.fields.path}
                >
                  {title}
                </Link>
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              <Link
                style={{
                  boxShadow: `none`,
                }}
                to={node.fields.path}
              >
                {node.frontmatter.category === 'tutorial'
                  ? 'Start the guide...'
                  : 'Read the story...'}
              </Link>
            </section>
          </article>
        )
      })}
    </div>
  )
}
