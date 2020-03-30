import React from 'react';
import {
  Edit,
  SimpleForm,
  NumberInput,
  TextInput
} from 'react-admin';

import { DateInput } from "../../components/DateTimeInput";

export default (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="lastName" />
      <TextInput source="firstName" />
      <TextInput source="patronymic" />
      <DateInput source="birthday" options={{ format: "yyyy-MM-dd"}} valueFormat="yyyy-MM-dd"  />
      <TextInput source="phone" />
      <NumberInput source="salary" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);