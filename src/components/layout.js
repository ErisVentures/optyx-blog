import React from "react"

import {Header} from "./header"
import {Footer} from "./footer"

import "../css/page.css"

class Layout extends React.Component {
  render() {
    const {children} = this.props
    return (
      <div style={{minHeight: "100vh"}}>
        <Header />
        <main style={{paddingBottom: 50}}>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout
