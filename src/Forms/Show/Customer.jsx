import React from 'react';

import {
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
  ReferenceManyField,
  Datagrid,
  DateField,
  ReferenceField,
  FunctionField
} from 'react-admin';

import PersonIcon from '@material-ui/icons/Person';
import ContactsIcon from '@material-ui/icons/Contacts';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';


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
      <Tab label="Deals" icon={ <InsertDriveFileIcon />} path="deals">
        <ReferenceManyField
          addLabel={false}
          reference="deals"
          target="customerId"
        >
          <Datagrid>
            <ReferenceField source="expeditionId" reference="expeditions">
              <TextField source="location" />
            </ReferenceField>
            <TextField source="status" />
            <TextField source="sum" />
            <ReferenceField source="employeeId" reference="employees">
              <FunctionField render={({lastName, firstName, patronymic}) => `${lastName} ${firstName} ${patronymic}`} />
            </ReferenceField>
            <ReferenceField source="childId" reference="children">
              <FunctionField render={({lastName, firstName, patronymic}) => `${lastName} ${firstName} ${patronymic}`} />
            </ReferenceField>
            <ActionsColumn label="Actions" textAlign="right" />
          </Datagrid>
        </ReferenceManyField>
        <AddRelatedButton path="deals" target="customerId"/>
      </Tab>

    </TabbedShowLayout>
  </Show>
);