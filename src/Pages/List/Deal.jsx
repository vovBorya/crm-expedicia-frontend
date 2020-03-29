import React from 'react';

import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  FunctionField,
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
        <FunctionField render={({fullName}) => `${fullName}`} />
      </ReferenceField>
      <ReferenceField source="customerId" reference="customers">
        <FunctionField render={({fullName}) => `${fullName}`} />
      </ReferenceField>
      <ReferenceField source="childId" reference="children">
        <FunctionField render={({fullName}) => `${fullName}`} />
      </ReferenceField>
      <ReferenceField source="expeditionId" reference="expeditions">
        <FunctionField render={({location}) =>
          `${location}`}/>
      </ReferenceField>
      <BooleanField source="sleepingBag"/>
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
)