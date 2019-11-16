/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"
import Image from "gatsby-image"

export const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logo: file(absolutePath: {regex: "/logo.png/"}) {
        childImageSharp {
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        background: "white",
        padding: "var(--base-spacing)",
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
          height: 60,
        }}
        to={`/`}
      >
        <img
          style={{height: 60, marginBottom: 0}}
          src={require("../../content/assets/logo.png")}
          alt={"Optyx Logo"}
        />
      </Link>
      <div style={{flexGrow: 1}} />
      <nav>
        <a href="https://www.optyx.app/#demo-screenshot">Demo</a>
        <a href="https://www.optyx.app/">Download</a>
        <a href="/tutorials/">Tutorials</a>
        <a href="https://www.optyx.app/#demo-screenshot">Blog</a>
      </nav>
    </header>
  )
}
