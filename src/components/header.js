import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

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
          <li className="nav-item active">
            <a className="nav-link" href="#">
              About me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Commits
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Companies
            </a>
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
