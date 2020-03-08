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
    const currentTime = new Date()
    const hourOfDay = currentTime.getUTCHours()
    const dayOfWeek = currentTime.getUTCDay()
    const isTooLateOrTooEarly = hourOfDay > 3 && hourOfDay < 15
    const isWeekend = dayOfWeek === 6 || dayOfWeek === 0 || (dayOfWeek === 1 && hourOfDay < 6)
    const isOutsideOfBusiness = isTooLateOrTooEarly || isWeekend

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
          <p style={{textAlign: 'right', opacity: 0.5, fontSize: 14}}>
            Photo by{' '}
            <a href="https://unsplash.com/@matthewwaring" target="_blank" rel="noopener noreferrer">
              @matthewwaring on Unsplash
            </a>
          </p>
          <p style={{marginTop: 10}}>Questions about the product? Need help getting started?</p>
          <button
            className="button"
            onClick={() => Tawk_API.toggle()}
            style={{position: 'relative', marginRight: 20, marginBottom: 25}}
          >
            Chat with a human{isOutsideOfBusiness ? '' : ' now'}
            <span
              style={{
                display: isOutsideOfBusiness ? 'block' : 'none',
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                color: 'rgba(0,0,0,0.5)',
                fontSize: '65%',
              }}
            >
              (currently closed, best effort only)
            </span>
          </button>

          <a className="button" href="mailto:support@optyx.app">
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
