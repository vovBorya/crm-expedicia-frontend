import React from 'react';
import {
  Filter,
  ReferenceInput,
  AutocompleteInput,
  SelectInput
} from 'react-admin';

import {contactType} from '../../../utils/enums';

const CustomerContactFilter = (props) => (
  <Filter {...props}>
    <SelectInput source="type" choices={contactType}/>
    <ReferenceInput source="customerId" reference="customers">
      <AutocompleteInput optionText="fullName" />
    </ReferenceInput>
  </Filter>
);

export default CustomerContactFilter;
