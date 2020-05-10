import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField
} from 'react-admin';

import ActionsColumn from '../../../components/ActionsColumn';

import Filter from './Filter';

export default props => (
  <List {...props} filters={<Filter />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="fullName" />
      <DateField source="birthday" locales="ru-RU"/>
      <TextField source="phone" />
      <TextField source="salary" />
      <EmailField source="email" />
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
);