import React from 'react';
import {
  Filter,
  ReferenceInput,
  AutocompleteInput,
  SearchInput
} from 'react-admin';

const ChildFilter = (props) => (
  <Filter {...props}>
    <SearchInput title="Full name" source="fullName" alwaysOn />
    <ReferenceInput source="parentId" reference="customers">
      <AutocompleteInput optionText="fullName" />
    </ReferenceInput>
  </Filter>
);

export default ChildFilter;
