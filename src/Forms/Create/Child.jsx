import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput } from 'react-admin';

import { parse } from 'query-string';

export default (props) => {
  const { parentId } = parse(props.location.search);

  const redirect = parentId ? `/customers/${parentId}/show/children` : 'list';

  return (
    <Create {...props}>
      <SimpleForm redirect={redirect} initialValues={{ parentId }}>
        <TextInput source="lastName" />
        <TextInput source="firstName" />
        <TextInput source="patronymic" />
        <DateInput source="birthday" />
        <ReferenceInput source="parentId" reference="customers">
          <SelectInput optionText={ ({lastName, firstName, patronymic}) => `${lastName} ${firstName} ${patronymic}` } />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
}