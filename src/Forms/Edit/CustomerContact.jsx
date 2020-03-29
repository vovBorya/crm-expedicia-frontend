import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  AutocompleteInput
} from 'react-admin';

import { parse } from 'query-string';

import {contactType} from '../../utils/enums';

export default (props) => {
  const {customerId: paramCustomerId} = parse(props.location.search);
  const customerId = paramCustomerId ? parseInt(paramCustomerId, 10) : undefined;
  const redirect = customerId ? `/customers/${customerId}/show/contacts`: 'list';

  return(
    <Edit {...props}>
      <SimpleForm redirect={redirect} initialValues={{customerId}}>
        <SelectInput source="type" choices={contactType}/>
        <TextInput source="content"/>
        <ReferenceInput source="customerId" reference="customers">
          <AutocompleteInput optionText="fullName"/>
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};