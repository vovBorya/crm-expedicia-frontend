import React from 'react';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    marginTop: '1em'
  }
};

const AddRelatedButton = ({ classes, record, path, target }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/${path}/create?${target}=${record.id}`}
    label="Add new"
    title="Add new"
  >
    <AddCircleOutlineIcon />
  </Button>
);

export default withStyles(styles)(AddRelatedButton);
