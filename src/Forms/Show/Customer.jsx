import React from 'react';

import { Show, TabbedShowLayout, Tab, TextField, ReferenceManyField, Datagrid, DateField, ShowButton } from 'react-admin';

import PersonIcon from '@material-ui/icons/Person';
import ContactsIcon from '@material-ui/icons/Contacts';
import ChildCareIcon from '@material-ui/icons/ChildCare';

import AddRelatedButton from '../../components/AddRelatedButton';
import ActionsColumn from '../../components/ActionsColumn'


export default (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Summary" icon={ <PersonIcon /> }>
        <TextField source="id" />
        <TextField source="lastName" />
        <TextField source="firstName" />
        <TextField source="patronymic" />
      </Tab>
      <Tab label="Contacts" icon={ <ContactsIcon />} path="contacts">
        <ReferenceManyField
          addLabel={false}
          reference="contacts"
          target="customerId"
        >
          <Datagrid>
            <TextField source="type" />
            <TextField source="content" />
            <ActionsColumn label="Actions" textAlign="right"/>
          </Datagrid>
        </ReferenceManyField>
        <AddRelatedButton path="contacts" target="customerId"/>
      </Tab>
      <Tab label="Children" icon={ <ChildCareIcon />} path="children">
        <ReferenceManyField
          addLabel={false}
          reference="children"
          target="parentId"
        >
          <Datagrid>
            <TextField source="lastName" />
            <TextField source="firstName" />
            <TextField source="patronymic" />
            <DateField source="birthday" />
            <ActionsColumn label="Actions" textAlign="right" />
          </Datagrid>
        </ReferenceManyField>
        <AddRelatedButton path="children" target="parentId"/>
      </Tab>

    </TabbedShowLayout>
  </Show>
);