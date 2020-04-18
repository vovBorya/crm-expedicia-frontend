import React from "react";
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";

import ActionsColumn from "../../../components/ActionsColumn";

import Filter from "./Filter";

export default (props) => (
  <List {...props} filters={<Filter />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="fullName" />
      <DateField source="birthday" locales="ru-RU" />
      <ReferenceField source="parentId" reference="customers" link="show">
        <TextField source="fullName" />
      </ReferenceField>
      <ActionsColumn label="Actions" textAlign="right" />
    </Datagrid>
  </List>
);
