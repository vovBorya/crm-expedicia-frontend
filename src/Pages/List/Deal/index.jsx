import React from 'react';

import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  BooleanField,
  SelectField
} from 'react-admin';

import ActionsColumn from '../../../components/ActionsColumn';

import Filter from './Filter'

import { dealStatus } from '../../../utils/enums';

export default (props) => (
  <List {...props} filters={ <Filter/> }>
    <Datagrid rowClick="show">
      <TextField source="id"/>
      <TextField source="sum"/>
      <SelectField source="status" choices={ dealStatus }/>
      <ReferenceField label="Employee" source="employeeId" reference="employees" link="show">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField label="Customer" source="customerId" reference="customers" link="show">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField label="Child" source="childId" reference="children" link="show">
        <TextField source="fullName" />
      </ReferenceField>
      <ReferenceField label="Location" source="expeditionId" reference="expeditions" link="show">
        <TextField source="location" />
      </ReferenceField>
      <BooleanField source="sleepingBag"/>
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
)
