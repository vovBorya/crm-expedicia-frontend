import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  AutocompleteInput
} from 'react-admin';

import { parse } from 'query-string';

import { DateInput } from "../../components/DateTimeInput";

export default (props) => {
  const { parentId: paramParentId } = parse(props.location.search);
  const parentId = paramParentId ? parseInt(paramParentId, 10) : undefined;
  const redirect = parentId ? `/customers/${parentId}/show/children` : 'list';

  return (
    <Edit {...props}>
      <SimpleForm redirect={redirect} initialValues={{ parentId }}>
        <TextInput source="lastName" />
        <TextInput source="firstName" />
        <TextInput source="patronymic" />
        <DateInput source="birthday" options={{ format: "yyyy-MM-dd"}} valueFormat="yyyy-MM-dd"  />
        <ReferenceInput source="parentId" reference="customers">
          <AutocompleteInput optionText="fullName" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};