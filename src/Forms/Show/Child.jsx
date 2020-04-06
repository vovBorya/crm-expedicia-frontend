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
  BooleanField
} from 'react-admin';

import PersonIcon from '@material-ui/icons/Person';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';


import AddRelatedButton from '../../components/AddRelatedButton';
import ActionsColumn from '../../components/ActionsColumn';

export default (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Child" icon={ <ChildCareIcon />}>
        <TextField source="id" />
        <TextField source="fullName" />
        <DateField source="birthday"/>
        <ReferenceField source="parentId" reference="customers" link="show">
          <TextField source="fullName" />
        </ReferenceField>
      </Tab>
      <Tab label="Parent" icon={<PersonIcon/>} path="customers">
        <ReferenceManyField
          addLabel={false}
          source="parentId"
          reference="customers"
        >
          <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="fullName" />
            <ActionsColumn label="Actions" textAlign="right" />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
      <Tab label="Deals" icon={ <InsertDriveFileIcon />} path="deals">
        <ReferenceManyField
          addLabel={false}
          reference="deals"
          target="childId"
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
        <AddRelatedButton path="deals" target="childId"/>
      </Tab>
    </TabbedShowLayout>
  </Show>
)
