import React, {useState} from 'react';
import {useTranslate} from "react-admin";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

import ListSubheader from '@material-ui/core/ListSubheader';

import DarkMode from "./DarkMode";
import Language from "./Language";
import Theme from "./Theme";

const useStyles = makeStyles({
  settingsCard: {
    maxWidth: 300,
  }
});


const Dashboard = () => {
  const classes = useStyles();
  const translate = useTranslate();

  const [changed, setChanged] = useState(false);

  return (
    <Card className={ classes.settingsCard }>
      <List subheader={<ListSubheader>{ translate('dashboard.settings.head') }</ListSubheader>} className={classes.root}>
        <Language />
        <DarkMode setChanged={setChanged} />
        <Theme setChanged={ setChanged } />
        <CardActions >
          { changed && <Button onClick={ () => window.location.reload(false) }>Reload</Button> }
        </CardActions>
      </List>
    </Card>
  )
};

export default Dashboard;
