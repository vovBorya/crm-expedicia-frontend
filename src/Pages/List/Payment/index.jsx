import React from 'react';
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  ChipField,
  DateField
} from 'react-admin';

import ActionsColumn from '../../../components/ActionsColumn';

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id"/>
      <DateField source="paidAt" locales="ru-RU" showTime/>
      <ReferenceField source="dealId" reference="deals" link="show">
        <ChipField source="id" />
      </ReferenceField>
      <TextField source="sum"/>
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
);