import React from 'react';

import {
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
  ReferenceField,
  SelectField
} from 'react-admin';

import { contactType } from '../../utils/enums';

import ContactsIcon from '@material-ui/icons/Contacts';

export default (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Contact" icon={<ContactsIcon/>}>
        <TextField source="id"/>
        <SelectField source="type" choices={ contactType }/>
        <TextField source="content"/>
        <ReferenceField source="customerId" reference="customers">
          <TextField source="fullName" />
        </ReferenceField>
      </Tab>
    </TabbedShowLayout>
  </Show>
)