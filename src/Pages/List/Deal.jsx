import React from 'react';

import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  BooleanField
} from 'react-admin';

import ActionsColumn from '../../components/ActionsColumn';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id"/>
      <TextField source="sum"/>
      <TextField source="status"/>
      <ReferenceField label="Employee" source="employeeId" reference="employees">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField source="customerId" reference="customers">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField source="childId" reference="children">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField source="expeditionId" reference="expeditions">
        <TextField source="location" />
      </ReferenceField>
      <BooleanField source="sleepingBag"/>
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
)