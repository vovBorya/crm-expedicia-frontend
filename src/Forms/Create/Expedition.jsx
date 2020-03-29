import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export default (props) => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput source="location"/>
      <TextInput source="abbreviation"/>
    </SimpleForm>
  </Create>
);