import { Link } from "gatsby";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import LogoSVG, {
  InstagramLogo,
  BehanceLogo,
  GithubLogo,
} from "../elements/logo";
import NavDrawer from "./NavDrawer";

import headerStyles from "./header.module.scss";

class Header extends React.Component {
  isMobileHandler = event => {
    if (event.currentTarget.innerWidth < 768) {
      this.props.isMobile(true)
    } else {
      this.props.isMobile(false)
    }
  }

  componentDidMount() {
    const windowWidth = window.innerWidth
    this.isMobileHandler({
      currentTarget: {
        innerWidth: windowWidth,
      },
    })
    window.addEventListener("resize", this.isMobileHandler)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.isMobileHandler)
  }

  render() {
    return (
      <header className={headerStyles.header}>
        <div className={headerStyles.container}>
          <div className={headerStyles.header__logo}>
            <Link to="/">
              <LogoSVG />
            </Link>
          </div>
          <nav className={headerStyles.nav}>
            <ul>
              <li>
                <Link to="/portfolio">
                  <InstagramLogo />
                </Link>
              </li>
              <li>
                <Link>
                  <BehanceLogo />
                </Link>
              </li>
              <li>
                <Link>
                  <GithubLogo />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const mapStateToProps = state => {
  return {
    stateMobile: state.isMobile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isMobile: isMobile =>
      dispatch({
        type: "MOBILE_TOGGLE",
        isMobile: isMobile
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

