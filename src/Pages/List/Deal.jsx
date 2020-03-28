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
      <ReferenceField label="Author" source="employeeId" reference="employees">
        <FunctionField render={({lastName, firstName, patronymic}) =>
          `${lastName} ${firstName} ${patronymic}`}/>
      </ReferenceField>
      <ReferenceField source="customerId" reference="customers">
        <FunctionField render={({lastName, firstName, patronymic}) =>
          `${lastName} ${firstName} ${patronymic}`}/>
      </ReferenceField>
      <ReferenceField source="childId" reference="children">
        <FunctionField render={({lastName, firstName, patronymic}) =>
          `${lastName} ${firstName} ${patronymic}`}/>
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