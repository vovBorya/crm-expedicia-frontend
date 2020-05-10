import React from 'react';
import {
  List,
  Datagrid,
  TextField
} from 'react-admin';

import ActionsColumn from '../../../components/ActionsColumn';
import Filter from './Filter'

export default (props) => (
  <List {...props} filters={ <Filter /> }>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="location" />
      <TextField source="abbreviation" />
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
);