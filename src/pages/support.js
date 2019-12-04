import React from 'react'
import {graphql} from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

/* global Tawk_API */

class SupportPage extends React.Component {
  render() {
    const {data} = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Support" />
        <div className="container">
          <h1>Support</h1>
          <Image
            style={{height: '40vh', width: '100%'}}
            imgStyle={{height: '40vh', width: '100%', objectFit: 'cover'}}
            fluid={data.hero.childImageSharp.fluid}
          />
          <p style={{marginTop: 10}}>Questions about the product? Need help getting started?</p>
          <button className="button" onClick={() => Tawk_API.toggle()}>
            Talk to a human now
          </button>
          <a style={{marginLeft: 20}} className="button" href="mailto:support@optyx.app">
            Send an email
          </a>
        </div>
      </Layout>
    )
  }
}

export default SupportPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    hero: file(absolutePath: {regex: "/life-support.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
