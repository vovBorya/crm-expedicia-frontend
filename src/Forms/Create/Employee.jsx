import React from 'react';
import {
  Create,
  SimpleForm,
  NumberInput,
  TextInput
} from 'react-admin';

import { DateInput } from "../../components/DateTimeInput";

export default (props) => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput source="lastName" />
      <TextInput source="firstName" />
      <TextInput source="patronymic" />
      <DateInput source="birthday" options={{ format: "yyyy-MM-dd"}} valueFormat="yyyy-MM-dd"  />
      <TextInput source="phone" />
      <NumberInput source="salary" />
      <TextInput source="email" />
    </SimpleForm>
  </Create>
);