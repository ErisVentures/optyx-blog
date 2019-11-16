/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

export const Footer = () => {
  return (
    <footer
      className="p-4"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        color: "white",
        fontSize: 14,
        background: "var(--theme-color)",
        padding: "var(--base-spacing)",
      }}
    >
      © {new Date().getFullYear()}, Built by
      {` `}
      <a style={{color: "white", marginLeft: 3}} href="https://eris.ventures">
        Eris Ventures
      </a>
    </footer>
  )
}
