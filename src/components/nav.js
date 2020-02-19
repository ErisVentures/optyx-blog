import React from 'react'

export const Nav = ({mini, setMini, isFooter}) => {
  return (
    <nav className={`nav--${mini ? 'mini' : 'full'}`}>
      <div
        className="mini-nav"
        style={{cursor: 'pointer', width: 32, height: 32}}
        onClick={() => setMini(v => !v)}
      >
        <svg viewBox="0 0 32 32" height="32px" width="32px">
          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
        </svg>
      </div>
      <div className="full-nav">
        <a href="https://www.optyx.app/#demo-screenshot" target="_blank" rel="noopener">
          Demo
        </a>
        <a href="https://www.optyx.app/download" target="_blank" rel="noopener">
          Download
        </a>
        <a href="/tutorials/">Tutorials</a>
        <a href="/blog/">Blog</a>
        <a href="/support/">Support</a>
        {isFooter ? <a href="/privacy/">Privacy</a> : null}
      </div>
    </nav>
  )
}
