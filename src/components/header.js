import { Link } from "gatsby";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import LogoSVG, {
  LinkeinLogo,
  BehanceLogo,
  GithubLogo,
} from "../elements/logo";

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
                <a href="https://www.linkedin.com/in/nuwan-goonewardena-6146a549" target="blank">
                  <LinkeinLogo />
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/nuwan_gec8b" target="blank">
                  <BehanceLogo />
                </a>
              </li>
              <li>
                <a href="https://github.com/nugoo1" target="blank">
                  <GithubLogo />
                </a>
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

