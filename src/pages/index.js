import * as React from "react"
import { Link } from "gatsby"
import "../styles/index.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container-fluid">
        <div className="row MainRow">
          <div className="col">
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <p>
              <Link to="/page-2/">Go to page 2</Link> <br />
              <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
