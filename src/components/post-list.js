import React from "react"
import {Link, useStaticQuery} from "gatsby"
import Image from "gatsby-image"
import {rhythm} from "../utils/typography"

export const PostList = ({title = "Posts", posts}) => {
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

  return (
    <div className="container p-4">
      <h2>{title}</h2>
      {posts.map(({node}) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} style={{display: "flex"}}>
            <div className="p-2" style={{position: "relative"}}>
              {node.frontmatter.image ? (
                <img
                  src={node.frontmatter.image}
                  style={{width: 400, height: 250, objectFit: "cover", marginBottom: 0}}
                />
              ) : (
                <Image fixed={data.postImage.childImageSharp.fixed} />
              )}
              <small
                className="p-2"
                style={{
                  fontWeight: "bold",
                  position: "absolute",
                  bottom: "var(--base-spacing)",
                  background: "white",
                  left: "var(--base-spacing)",
                }}
              >
                {node.frontmatter.date}
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
                    color: "var(--base-text-color)",
                    textDecoration: "none",
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
                {node.frontmatter.category === "tutorial"
                  ? "Start the guide..."
                  : "Read the story..."}
              </Link>
            </section>
          </article>
        )
      })}
    </div>
  )
}
