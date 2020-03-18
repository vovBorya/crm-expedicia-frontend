import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton, FunctionField } from 'react-admin';


export default props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="lastName" />
      <TextField source="firstName" />
      <TextField source="patronymic" />
      <EmailField source="email" />
      <FunctionField label="Actions" textAlign="right" render={record => [
        <EditButton {...props } record={record} />,
        <DeleteButton {...props } record={record} />
      ] } />
    </Datagrid>
  </List>
);