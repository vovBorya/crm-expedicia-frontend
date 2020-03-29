import React from 'react';
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  FunctionField,
  DateField
} from 'react-admin';

import ActionsColumn from '../../components/ActionsColumn';

export default props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="fullName" />
      <DateField source="birthday"/>
      <ReferenceField source="parentId" reference="customers">
        <FunctionField render={({fullName}) => `${fullName}`} />
      </ReferenceField>
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
)
