import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export default (props) => (
  <Edit {...props}>
    <SimpleForm redirect="list">
      <TextInput source="location"/>
      <TextInput source="abbreviation"/>
    </SimpleForm>
  </Edit>
);