import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  NumberInput,
  ReferenceInput,
  SelectInput
} from 'react-admin'
import { DateTimeInput } from '../../components/DateTimeInput';

export default (props) => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab>
        <DateTimeInput source="paidAt" options={{ format: "yyyy-MM-dd'T'HH:mm"}} valueFormat="yyyy-MM-dd'T'HH:mm" />
        <NumberInput source="sum"/>
        <ReferenceInput source="dealId" reference="deals" allowEmpty>
          <SelectInput optionText="id" />
        </ReferenceInput>
      </FormTab>
    </TabbedForm>
  </Edit>
);