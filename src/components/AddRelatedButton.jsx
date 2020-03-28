import React from 'react';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { withStyles } from '@material-ui/core/styles';
import { useTranslate, Button } from 'react-admin';

const styles = {
  button: {
    marginTop: '1em',
    marginBottom: '1em',

  }
};

const AddRelatedButton = ({ classes, record, path, target }) => {
  const translate = useTranslate();

  return (
    <Button
      className={classes.button}
      variant="outlined"
      component={Link}
      to={`/${path}/create?${target}=${record.id}`}
      label={ translate('common.addNew') }
      title={ translate('common.addNew') }
    >
      <AddCircleOutlineIcon />
    </Button>
  );
}

export default withStyles(styles)(AddRelatedButton);
