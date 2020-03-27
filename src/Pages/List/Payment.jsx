import React from 'react';
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  DeleteButton
} from 'react-admin';

import ActionsColumn from '../../components/ActionsColumn';

export default (props) => (
  <List {...props}>
    <Datagrid rowClicl="show">
      <TextField source="id"/>
      <TextField source="paidAt"/>
      <ReferenceField source="dealId" reference="deals">
        <TextField source="id" label="Deal"/>
      </ReferenceField>
      <TextField source="sum"/>
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
)