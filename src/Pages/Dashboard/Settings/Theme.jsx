import React, {useState} from 'react';
import {useTranslate} from "react-admin";
import themes from '../../../themes';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import PaletteIcon from '@material-ui/icons/Palette';

const Theme = ({setChanged}) => {

  const translate = useTranslate();

  const [theme, setTheme] = useState(localStorage.getItem("THEME") || 'dark')

  const handleChange = ({ target: { value } }) => {
    setTheme(value);
    localStorage.setItem("THEME", value);
    setChanged(true);
  }

  return (
    <ListItem>
      <ListItemIcon>
        <PaletteIcon />
      </ListItemIcon>
      <ListItemText primary={ translate('dashboard.settings.theme') } />
      <ListItemSecondaryAction>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={theme}
          onChange={handleChange}
        >
          {
            Object.keys(themes).map(key => (
              <MenuItem value={key} key={key}>{ translate(`common.themes.${key}`)}</MenuItem>
            ))
          }
        </Select>
      </ListItemSecondaryAction>
    </ListItem>
  )

}

export default Theme;
