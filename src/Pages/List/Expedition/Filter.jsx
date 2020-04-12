import React from 'react';
import {
  Filter,
  SearchInput
} from 'react-admin';

const ChildFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="location" alwaysOn />
  </Filter>
);

export default ChildFilter;
