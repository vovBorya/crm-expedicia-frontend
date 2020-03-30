import React from 'react';
import { 
  List, 
  Datagrid, 
  TextField
} from 'react-admin';

import ActionsColumn from '../../components/ActionsColumn';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="location" />
      <TextField source="abbreviation" />
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
);