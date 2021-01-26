import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation";

import "../assets/scss/style.scss"
import Footer from "./footer";

const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      siteTitle: title
    }
  }
}
`

const Layout = ({children, className}) => {

  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <div className="primary-container">
        <div className="row text-center header">
        <div className="col-12">
        <video src="/assets/intro.mp4" playsInline
        preload="auto" muted
        autoPlay={true} controls={false} />
        </div>
        <div className="col-12">
          <Navigation/>
        </div>
        </div>
        
    
      <main className={"container " + className}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout

