import React from 'react';
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  SelectField
} from 'react-admin';

import ActionsColumn from '../../../components/ActionsColumn';
import Filter from './Filter';

import { contactType } from '../../../utils/enums';

export default props => (
  <List {...props} filters={ <Filter /> }>
    <Datagrid rowClick="show">
      <TextField source="id"/>
      <SelectField source="type" choices={ contactType }/>
      <TextField source="content"/>
      <ReferenceField source="customerId" reference="customers">
        <TextField source="fullName" />
      </ReferenceField>
      <ActionsColumn label="Actions" textAlign="right"/>
    </Datagrid>
  </List>
);
