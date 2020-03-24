import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

import ActionsColumn from '../../components/ActionsColumn'

export default props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="lastName" />
      <TextField source="firstName" />
      <TextField source="patronymic" />
      <EmailField source="email" />
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
);