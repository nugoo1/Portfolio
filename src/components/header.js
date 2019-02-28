import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoSVG, { InstagramLogo, BehanceLogo, GithubLogo } from "../elements/logo"
import NavDrawer from "./NavDrawer"

import headerStyles from "./header.module.scss"

const Header = () => (
  <header className={headerStyles.header}>
    <div className={headerStyles.container}>
      <div className={headerStyles.header__logo}>
        <Link to="/">
          <LogoSVG />
        </Link>
      </div>
      <div className={headerStyles.header__hamburger}>
        <NavDrawer />
      </div>
      <nav className={headerStyles.nav}>
        <ul>
          <li>
            <Link to="/portfolio">
              <InstagramLogo />
            </Link>
          </li>
          <li>
            <Link><BehanceLogo/></Link>
          </li>
          <li>
            <Link><GithubLogo/></Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
