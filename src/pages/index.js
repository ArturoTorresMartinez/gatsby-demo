import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../styles/index.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const gatsbyRepoData = useStaticQuery(graphql`
    query {
      github {
        user(login: "ArturoTorresMartinez") {
          bio
          avatarUrl(size: 300)
          company
          email
          name
          login
          location
          url
          websiteUrl
          repositories(first: 10) {
            edges {
              node {
                name
                id
                url
              }
            }
          }
        }
      }
    }
  `)
  const [repositories, setRepositories] = useState(
    gatsbyRepoData.github.user.repositories.edges
  )

  const RenderItems = ({ data }) => {
    return (
      (data &&
        data.map((data, index) => (
          <li key={data.node.id}>{data.node.name}</li>
        ))) ||
      null
    )
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div className="row MainRow my-4">
          <div className="col">
            <div className="row justify-content-center align-items-center mb-4">
              <div className="col-12 col-lg-6 text-lg-left text-center">
                <h1 className="Hello">
                  Hi, my name is{" "}
                  <span className="text-nowrap">
                    {gatsbyRepoData.github.user.name}
                  </span>
                </h1>
              </div>
              <div className="col-12 col-lg-6 AvatarContainer rounded">
                <img
                  src={gatsbyRepoData.github.user.avatarUrl}
                  alt="profileImage"
                />
              </div>
            </div>

            <h2>
              I'm a <span>{gatsbyRepoData.github.user.bio}</span> and work as a{" "}
              <span>{gatsbyRepoData.github.user.company}</span>
            </h2>
            <p>A few of my repositories are:</p>
            <ul>
              <RenderItems data={repositories} />
            </ul>
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
