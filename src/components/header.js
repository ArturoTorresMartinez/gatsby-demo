import * as React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteTitle }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-lg-5">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <AniLink
              swipe
              direction="right"
              to="/"
              className="text-decoration-none"
            >
              <div className="nav-link" href="#">
                About me
              </div>
            </AniLink>
          </li>
          <li className="nav-item text-decoration-none">
            <AniLink
              swipe
              direction="left"
              to="/commits/"
              className="text-decoration-none"
            >
              <div className="nav-link" href="#">
                Commits
              </div>
            </AniLink>
          </li>
          <li className="nav-item">
            <AniLink
              swipe
              direction="left"
              to="/marketplace/"
              className="text-decoration-none"
            >
              <div className="nav-link" href="#">
                Marketplace
              </div>
            </AniLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
