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
      <TextField source="paidAt"/>
      <ReferenceField source="dealId" reference="deals" link="show">
        <TextField source="id" label="Deal"/>
      </ReferenceField>
      <TextField source="sum"/>
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
)