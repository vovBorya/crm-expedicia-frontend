import React from 'react';
import {
  List,
  Datagrid,
  ReferenceField,
  TextField
} from 'react-admin';

import ActionsColumn from '../../components/ActionsColumn';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id"/>
      <TextField source="type"/>
      <TextField source="content"/>
      <ReferenceField source="customerId" reference="customers">
        <TextField source="fullName" />
      </ReferenceField>
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
);