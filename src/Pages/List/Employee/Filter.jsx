import React from 'react';
import {
  Filter,
  SearchInput
} from 'react-admin';

const EmployeeFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="fullName" alwaysOn />
    <SearchInput source="phone" />
  </Filter>
);

export default EmployeeFilter;
