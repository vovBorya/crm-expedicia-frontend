import React from 'react';
import {
  Filter,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

const ChildFilter = (props) => (
  <Filter {...props}>
    <ReferenceInput source="parentId" reference="customers" alwaysOn>
      <AutocompleteInput optionText="fullName" />
    </ReferenceInput>
  </Filter>
);

export default ChildFilter;
