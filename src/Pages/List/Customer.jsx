import React from 'react';
import { 
  List, 
  Datagrid, 
  TextField
} from 'react-admin';

import ActionsColumn from '../../components/ActionsColumn'

export default props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="lastName" />
      <TextField source="firstName" />
      <TextField source="patronymic" />
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
);