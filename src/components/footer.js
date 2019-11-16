/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"
import Image from "gatsby-image"

export const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        color: "white",
        background: "var(--theme-color)",
        marginTop: "calc(var(--base-spacing) * 4)",
        padding: "var(--base-spacing)",
      }}
    >
      © {new Date().getFullYear()}, Built by
      {` `}
      <a style={{color: "white", marginLeft: 5}} href="https://eris.ventures">
        Eris Ventures
      </a>
    </footer>
  )
}
