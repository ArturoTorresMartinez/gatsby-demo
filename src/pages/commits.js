import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/commits.scss"
import { DateTime } from "luxon"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Commits = () => {
  const gatsbyRepoData = useStaticQuery(graphql`
    query {
      github {
        repository(name: "gatsby-demo", owner: "ArturoTorresMartinez") {
          name
          ref(qualifiedName: "main") {
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

  const units = ["year", "month", "week", "day", "hour", "minute", "second"]

  const timeAgo = date => {
    let dateTime = DateTime.fromISO(date)
    const diff = dateTime.diffNow().shiftTo(...units)
    const unit = units.find(unit => diff.get(unit) !== 0) || "second"

    const relativeFormatter = new Intl.RelativeTimeFormat("en", {
      numeric: "auto",
    })
    return relativeFormatter.format(Math.trunc(diff.as(unit)), unit)
  }

  const RenderItems = ({ data }) => {
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
                  <div className="col-10 col-lg-11">
                    <p className="p-0 m-0 mb-2">{data.node.messageHeadline}</p>
                    <p className="MessageBody">{data.node.messageBody}</p>
                    <p className="TimeAgo"> {timeAgo(data.node.pushedDate)}</p>
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
      <SEO title="Commits" />
      <div className="container my-4">
        <div className="row CommitsMainContainer">
          <div className="col">
            <h1 className="text-lg-left text-center">Commit history</h1>
            <ul className="ListCommits">
              <RenderItems data={commits} />
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Commits
