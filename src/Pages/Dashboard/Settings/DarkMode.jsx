import React, {useState} from 'react';
import { useTranslate } from "react-admin";

import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';

import Brightness4Icon from '@material-ui/icons/Brightness4';

const DarkModeSwitch = withStyles({
  switchBase: {
    color: "#fff",
    '&$checked': {
      color: "#000",
    }
  },
  checked: {},
  track: {},
})(Switch);

const DarkMode = ({setChanged}) => {

  const translate = useTranslate()
  const [darkmode, setDarkmode] = useState(
    localStorage.getItem('DARKMODE' ) === 'true'
  );

  const handleChange = ({ target: { checked } }) => {
    localStorage.setItem('DARKMODE', checked);
    setDarkmode(checked);
    setChanged(true);
  }

  return (
    <ListItem>
      <ListItemIcon>
        <Brightness4Icon />
      </ListItemIcon>
      <ListItemText id="switch-list-label-wifi" primary={ translate('dashboard.settings.darkmode') } />
      <ListItemSecondaryAction>
        <DarkModeSwitch
          checked={ darkmode }
          onChange={ handleChange }
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default DarkMode;