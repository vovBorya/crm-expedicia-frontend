import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export default (props) => (
  <Edit {...props}>
    <SimpleForm redirect="list">
      <TextInput source="lastName" />
      <TextInput source="firstName" />
      <TextInput source="patronymic" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);