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
          <li className="nav-item">
            <Link to="/" className="text-decoration-none">
              <div className="nav-link" href="#">
                About me
              </div>
            </Link>
          </li>
          <li className="nav-item text-decoration-none">
            <Link to="/commits/" className="text-decoration-none">
              <div className="nav-link" href="#">
                Commits
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/commits/" className="text-decoration-none">
              <div className="nav-link" href="#">
                Companies
              </div>
            </Link>
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
