import React from 'react';

import {
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
  ReferenceField
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
          <TextField source="fullName" />
        </ReferenceField>
      </Tab>
    </TabbedShowLayout>
  </Show>
)