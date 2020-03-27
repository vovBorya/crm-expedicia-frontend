import React from 'react';
import {useLocale, useSetLocale, useTranslate} from "react-admin";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import TranslateIcon from '@material-ui/icons/Translate';


const Language = () => {

  const locale = useLocale();
  const setLocale = useSetLocale();
  const translate = useTranslate()

  const handleChange = ({ target: { value } }) => {
    localStorage.setItem('LOCALE', value);
    setLocale(value);
  }

  return(
    <ListItem>
      <ListItemIcon>
        <TranslateIcon />
      </ListItemIcon>
      <ListItemText id="switch-list-label-wifi" primary={ translate('dashboard.settings.language') } />
      <ListItemSecondaryAction>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={locale}
          onChange={handleChange}
        >
          <MenuItem value="ru">Русский</MenuItem>
          <MenuItem value="ua">Українська</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Language;