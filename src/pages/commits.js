import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/commits.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Commits = () => {
  const gatsbyRepoData = useStaticQuery(graphql`
    query {
      github {
        repository(name: "gatsby-demo", owner: "ArturoTorresMartinez") {
          name
          ref(qualifiedName: "develop") {
            name
            target {
              ... on GitHub_Commit {
                id
                history(first: 100) {
                  edges {
                    node {
                      messageHeadline
                      messageBody
                      id
                      author {
                        name
                        avatarUrl(size: 50)
                        email
                      }
                      pushedDate
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const [commits, setCommits] = useState(
    gatsbyRepoData.github.repository.ref.target.history.edges
  )

  const RenderItems = ({ data }) => {
    console.log("data", data)
    return (
      (data &&
        data.map((data, index) => (
          <li key={data.node.id}>
            <div className="row">
              <div className="Line rounded-left" />
              <div className="col CommitContainer py-3 rounded-right">
                <div className="row">
                  <div className="col-2 col-lg-1 align-items-center justify-content-center d-flex">
                    <img
                      src={data.node.author.avatarUrl}
                      alt="profileImage"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="col-8 col-lg-10">
                    <p className="p-0 m-0 mb-2">{data.node.messageHeadline}</p>
                    <p className="MessageBody">{data.node.messageBody}</p>
                  </div>
                  <div className="col-2 col-lg-1"></div>
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
      <SEO title="Commits" />
      <div className="container my-4">
        <div className="row">
          <div className="col">
            <h1>Commit history</h1>
            <ul className="List">
              <RenderItems data={commits} />
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Commits
