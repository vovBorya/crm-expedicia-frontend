import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  FunctionField
} from 'react-admin';

import ActionsColumn from '../../components/ActionsColumn';

export default props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="lastName" />
      <TextField source="firstName" />
      <TextField source="patronymic"/>
      <TextField source="birthday" />
      <TextField source="phone" />
      <TextField source="salary" />
      <EmailField source="email" />
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
);