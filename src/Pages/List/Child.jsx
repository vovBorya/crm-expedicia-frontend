import React from 'react';
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  DateField
} from 'react-admin';

import ActionsColumn from '../../components/ActionsColumn';

export default props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="fullName" />
      <DateField source="birthday"/>
      <TextField source="age" />
      <ReferenceField
        source="parentId"
        reference="customers"
        link="show"
      >
        <TextField source="fullName" />
      </ReferenceField>
      <TextField source="city"/>
      <TextField source="status"/>
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
)
