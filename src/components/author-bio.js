/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Image from "gatsby-image"

import {rhythm} from "../utils/typography"

const AUTHORS = {
  patrick: {
    name: "Patrick Hulce",
    link: "https://twitter.com/patrickhulce",
    description:
      "Patrick is the founder of Eris Ventures and principal software engineer of Optyx.",
  },
}

const Bio = ({author}) => {
  author = author || "patrick"
  const data = useStaticQuery(graphql`
    query BioQuery {
      patrick: file(absolutePath: {regex: "/profile-patrick.jpg/"}) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const authorData = AUTHORS[author]

  return (
    <div
      style={{
        display: `flex`,
        alignItems: "center",
        marginBottom: rhythm(2.5),
      }}
    >
      <a
        href={authorData.link}
        style={{
          width: 50,
          height: 50,
          marginRight: rhythm(1 / 2),
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          fixed={data[author].childImageSharp.fixed}
          alt={author}
          style={{
            marginBottom: 0,
            width: 50,
            height: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </a>
      <p style={{marginBottom: 0}}>
        Written by{" "}
        <a
          href={authorData.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{fontWeight: "bold"}}
        >
          {authorData.name}
        </a>
        , {authorData.description}
      </p>
    </div>
  )
}

export default Bio
