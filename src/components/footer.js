/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useEffect, useState} from 'react'
import {Link} from 'gatsby'
import {Nav} from './nav'

export const Footer = () => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const listener = () => {
      const endOfViewport = document.scrollingElement.scrollTop + window.innerHeight
      const endOfDocument = document.body.clientHeight
      const pixelsLeftToScroll = endOfDocument - endOfViewport
      // map 0-50 pixelsLeftToScroll to 1
      // map 50-300 pixelsLeftToScroll to 1-0
      if (pixelsLeftToScroll < 50) return setOpacity(1)
      if (pixelsLeftToScroll < 300) return setOpacity(1 - (pixelsLeftToScroll - 50) / 250)
      return setOpacity(0)
    }

    document.addEventListener('scroll', listener, {passive: true})
    listener()
    return () => document.removeEventListener('scroll', listener)
  })

  const bottomPosition = -50 + opacity * 50
  return (
    <footer
      className="p-4"
      style={{
        opacity,
        position: 'fixed',
        bottom: bottomPosition,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        color: 'white',
        fontSize: 14,
        background: 'var(--theme-color)',
        padding: 'var(--base-spacing)',
      }}
    >
      <Link to="/" style={{lineHeight: 0}}>
        <img
          style={{height: 24, marginBottom: 0}}
          src={require('../../content/assets/icon.png')}
          alt={'Optyx Logo'}
        />
      </Link>
      <Nav></Nav>
      <div style={{flexGrow: 1}} />
      <div style={{opacity: 0.7}}>
        © {new Date().getFullYear()} - Built by
        {` `}
        <a style={{color: 'white', marginLeft: 3}} href="https://eris.ventures" target="_blank">
          Eris Ventures, LLC
        </a>
      </div>
    </footer>
  )
}
