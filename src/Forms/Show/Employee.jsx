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
    EmailField,
    BooleanField
} from 'react-admin';

import PersonIcon from '@material-ui/icons/Person';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import AddRelatedButton from '../../components/AddRelatedButton';
import ActionsColumn from '../../components/ActionsColumn';

import EmployeeName from '../../components/ShowTitle';

export default (props) => (
  <Show title={<EmployeeName />} {...props}>
    <TabbedShowLayout>
      <Tab label="Summary" icon={ <PersonIcon /> }>
        <TextField source="id" />
        <TextField source="fullName" />
        <DateField source="birthday" />
        <TextField source="phone" />
        <TextField source="salary" />
        <EmailField source="email" />
      </Tab>
      <Tab label="Deals" icon={ <InsertDriveFileIcon />} path="deals">
        <ReferenceManyField
          addLabel={false}
          reference="deals"
          target="employeeId"
        >
          <Datagrid rowClick="show">
            <TextField source="id"/>
            <TextField source="sum" />
            <TextField source="status" />
            <ReferenceField source="employeeId" reference="employees" link="show">
              <TextField source="fullName" />
            </ReferenceField>
            <ReferenceField source="customerId" reference="customers" link="show">
              <TextField source="fullName" />
            </ReferenceField>
            <ReferenceField source="childId" reference="children" link="show">
              <TextField source="fullName" />
            </ReferenceField>
            <ReferenceField source="expeditionId" reference="expeditions" link="show">
              <TextField source="location" />
            </ReferenceField>
            <BooleanField source="sleepingBag"/>
            <ActionsColumn label="Actions" textAlign="right" />
          </Datagrid>
        </ReferenceManyField>
        <AddRelatedButton path="deals" target="employeeId"/>
        </Tab>
      </TabbedShowLayout>
  </Show>
)