import React from "react"

export const Nav = () => {
  return (
    <nav>
      <a
        href="https://www.optyx.app/#demo-screenshot"
        target="_blank"
        rel="noopener"
      >
        Demo
      </a>
      <a
        href="https://us-central1-dwigt-api.cloudfunctions.net/downloadDwigt"
        target="_blank"
        rel="noopener"
      >
        Download
      </a>
      <a href="/tutorials/">Tutorials</a>
      <a href="/blog/">Blog</a>
    </nav>
  )
}
