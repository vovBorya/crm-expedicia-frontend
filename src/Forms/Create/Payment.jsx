import React from 'react';
import {
  Create,
  TextInput,
  TabbedForm,
  FormTab,
  NumberInput
} from 'react-admin'
import { DateTimeInput } from '../../components/DateTimeInput';

export default (props) => (
  <Create {...props}>
    <TabbedForm>
      <FormTab>
        <DateTimeInput source="paidAt" options={{ format: "yyyy-MM-dd'T'HH:mm"}} valueFormat="yyyy-MM-dd'T'HH:mm" />
        <NumberInput source="dealId"/>
        <NumberInput source="sum"/>
      </FormTab>
    </TabbedForm>
  </Create>
);