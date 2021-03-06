import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = {
  root: {
    flexGrow: 1
  }
};

function Loader(props) {
  const { classes, check } = props;
  if (check) {
    return <React.Fragment />;
  }

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Loader);
