import React from 'react';
import { useTranslate, useLocale, useSetLocale } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TranslateIcon from '@material-ui/icons/Translate';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const locale = useLocale();
  const setLocale = useSetLocale();
  const translate = useTranslate()

  const handleChange = ({ target: { value } }) => {
    localStorage.setItem('LOCALE', value);
    setLocale(value);
  }

  return (
    <Card className={ classes.root }>
      <List subheader={<ListSubheader>{ translate('dashboard.settings') }</ListSubheader>} className={classes.root}>
        <ListItem>
          <ListItemIcon>
            <TranslateIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary={ translate('dashboard.language') } />
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
      </List>
    </Card>
  )
};

export default Dashboard;
