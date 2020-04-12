import React from 'react';
import {
  Filter,
  SearchInput
} from 'react-admin';

const ChildFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="fullName" alwaysOn />
  </Filter>
);

export default ChildFilter;