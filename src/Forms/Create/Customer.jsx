import React from 'react';
import { Create, SimpleForm, TextInput, SelectInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

import { customerStatus } from '../../utils/enums';

export default (props) => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput source="lastName" />
      <TextInput source="firstName" />
      <TextInput source="patronymic" />
      <TextInput source="city" />
      <SelectInput source="status" choices={ customerStatus } />
      <RichTextInput source="exemptions" />
    </SimpleForm>
  </Create>
);
