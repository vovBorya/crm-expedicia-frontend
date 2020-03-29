import React from 'react';

import {
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
  ReferenceField,
  FunctionField
} from 'react-admin'

import ContactsIcon from '@material-ui/icons/Contacts';

export default (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Contact" icon={<ContactsIcon/>}>
        <TextField source="id"/>
        <TextField source="type"/>
        <TextField source="content"/>
        <ReferenceField source="customerId" reference="customers">
          <FunctionField render={({fullName}) => `${fullName}`}/>
        </ReferenceField>
      </Tab>
    </TabbedShowLayout>
  </Show>
)