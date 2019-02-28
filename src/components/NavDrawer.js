import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import HamburgerIcon from "../elements/hamburger"
import { Link } from "gatsby"

import navdrawerStyles from "./navdrawer.module.scss";

import {
  FaYelp,
  FaMusic,
  FaWineBottle,
  FaUtensils,
  FaGlassMartini,
  FaFileInvoice,
  FaTrophy,
  FaNewspaper,
  FaPhone,
} from "react-icons/fa"
const icons = [
  <FaYelp />,
  <FaWineBottle />,
  <FaMusic />,
  <FaUtensils />,
  <FaGlassMartini />,
  <FaFileInvoice />,
  <FaTrophy />,
  <FaNewspaper />,
  <FaPhone />,
]

const styles = {
  list: {
    width: `100vw`,
  },
  paper: {
    background: "#222",
    top: 65,
  },
}

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  render() {
    const { classes } = this.props
    const sideList = (
      <div className={classes.list}>
        <List>
          {["Pricing", "Portfolio", "Team", "Contact"].map(
            (text, index) => (
              <Link to={"/" + text.toLowerCase()} key={index} className={navdrawerStyles.link}>
                <ListItem button key={text} className={navdrawerStyles.listItem}>
                  <h2>
                    {text}
                  </h2>
                </ListItem>
              </Link>
            )
          )}
        </List>
      </div>
    )

    return (
      <div>
        <div className="hamburgerIcon">
          <HamburgerIcon
            onClickHandler={this.toggleDrawer("right", true)}
            style={{ cursor: "pointer" }}
            menuOpen={this.state.right}
          />
          <Drawer
            classes={{ paper: classes.paper }}
            anchor="bottom"
            open={this.state.right}
            onClose={this.toggleDrawer("right", false)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer("right", false)}
              onKeyDown={this.toggleDrawer("right", false)}
            >
              {sideList}
            </div>
          </Drawer>
        </div>
      </div>
    )
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TemporaryDrawer)
