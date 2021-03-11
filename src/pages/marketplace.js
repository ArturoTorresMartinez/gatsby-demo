import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/marketplace.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Categories = () => {
  const gatsbyRepoData = useStaticQuery(graphql`
    query {
      github {
        marketplaceCategories(excludeEmpty: true) {
          name
          primaryListingCount
          description
          howItWorks
          url
        }
      }
    }
  `)

  const [categories, setCategories] = useState(
    gatsbyRepoData.github.marketplaceCategories
  )

  const RenderItems = ({ data }) => {
    return (
      (data &&
        data.map((data, index) => (
          <li key={data.name}>
            <div className="row">
              <div className="col-10 CategoryContainer py-3 rounded">
                <div className="row">
                  <div className="col-10">
                    <p>{data.name}</p>
                    <p className="ContainerBody">{data.description}</p>
                  </div>
                  <div className="col-2 justify-content-center align-items-center d-flex">
                    <a
                      href={data.url}
                      target="_blank"
                      className="ButtonNav btn btn-secondary"
                      role="button"
                    >
                      Go!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))) ||
      null
    )
  }

  return (
    <Layout>
      <SEO title="Marketplace" />
      <div className="container my-4">
        <div className="row MarketplaceMainContainer">
          <div className="col">
            <h1>Marketplace Categories</h1>
            <ul className="ListCategories">
              <RenderItems data={categories} />
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Categories
