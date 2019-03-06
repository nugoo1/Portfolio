import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import { FaWindowClose } from "react-icons/fa"
import Grid from "@material-ui/core/Grid"
import modalStyles from "./modal.module.scss"

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const styles = theme => ({
  paper: {
    position: "absolute",
    backgroundColor: "#f3f3f3",
    boxShadow: theme.shadows[5],
    padding: 0,
    outline: "none",
  },
})

class SimpleModal extends React.Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props

    return (
      <div style={{ position: "relative" }}>
        <h1 onClick={this.handleOpen} className={modalStyles.button}>
          Learn More
        </h1>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <div
              onClick={this.handleClose}
              style={{
                position: "absolute",
                right: "0",
                margin: "5px",
                cursor: "pointer",
              }}
            >
              <FaWindowClose color="purple" />
            </div>
            <Grid container className={modalStyles.gridContainer}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={modalStyles.imageContainer}>
                <img
                  src={this.props.image}
                  className={modalStyles.image}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={modalStyles.textContainer}
              >
                <h1>{this.props.title}</h1>
                <p>{this.props.desc}</p>
                <a href={this.props.link} target="blank">Official Site</a>
              </Grid>
            </Grid>
          </div>
        </Modal>
      </div>
    )
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
}

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal)

export default SimpleModalWrapped
