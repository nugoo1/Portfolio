import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { FaWindowClose } from "react-icons/fa";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: "70%",
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: 0,
    outline: "none"
  }
});

class SimpleModal extends React.Component {
  state = {
    open: false
  };

  UNSAFE_componentWillReceiveProps() {
    this.setState({
      open: this.props.isOpen
    });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
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
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "5px",
                cursor: "pointer"
              }}
            >
              <FaWindowClose color="black" />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
