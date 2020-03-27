import React from 'react';
import { 
  Create, 
  SimpleForm, 
  TextInput, 
  DateInput, 
  ReferenceInput, 
  AutocompleteInput 
} from 'react-admin';

import { parse } from 'query-string';

export default (props) => {
  const { parentId: paramParentId } = parse(props.location.search);
  const parentId = paramParentId ? parseInt(paramParentId, 10) : undefined;
  const redirect = parentId ? `/customers/${parentId}/show/children` : 'list';

  return (
    <Create {...props}>
      <SimpleForm redirect={redirect} initialValues={{ parentId }}>
        <TextInput source="lastName" />
        <TextInput source="firstName" />
        <TextInput source="patronymic" />
        <DateInput source="birthday" />
        <ReferenceInput source="parentId" reference="customers">
          <AutocompleteInput optionText={ record => {
            if(!record) return undefined;
            return `${record.lastName} ${record.firstName} ${record.patronymic}`
          } } />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
}