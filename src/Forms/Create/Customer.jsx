import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export default (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="last_name" />
      <TextInput source="first_name" />
      <TextInput source="patronymic" />
      <TextInput source="email_address" />
    </SimpleForm>
  </Create>
);