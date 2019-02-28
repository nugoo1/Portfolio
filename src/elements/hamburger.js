import React from "react";
import "./hamburger.scss";

const HamburgerIcon = (props) => {
    return (
        <div id="nav-icon1" className={props.menuOpen ? "open" : "close"} onClick={props.onClickHandler}>
          <span />
          <span />
          <span />
        </div>
      );
};

export default HamburgerIcon;