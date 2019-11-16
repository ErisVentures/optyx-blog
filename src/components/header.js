/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import {Link} from "gatsby"

export const Header = () => {
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
          flexShrink: 0,
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
