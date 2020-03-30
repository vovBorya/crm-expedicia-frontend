import React from 'react';

import {
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField
} from 'react-admin';

import ExpeditionIcon from '@material-ui/icons/Deck';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';


import AddRelatedButton from '../../components/AddRelatedButton';
import ActionsColumn from '../../components/ActionsColumn';


export default (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Summary" icon={ <ExpeditionIcon/> }>
        <TextField source="id" />
        <TextField source="location" />
        <TextField source="abbreviation" />
      </Tab>
      <Tab label="Deals" icon={ <InsertDriveFileIcon />} path="deals">
        <ReferenceManyField
          addLabel={false}
          reference="deals"
          target="expeditionId"
        >
          <Datagrid>
            <TextField source="id"/>
            <TextField source="sum"/>
            <TextField source="status"/>
            <ReferenceField source="employeeId" reference="employees">
              <TextField source="fullName" />
            </ReferenceField>
            <ReferenceField source="customerId" reference="customers">
              <TextField source="fullName" />
            </ReferenceField>
            <ReferenceField source="childId" reference="children">
              <TextField source="fullName" />
            </ReferenceField>
            <ReferenceField source="expeditionId" reference="expeditions">
              <TextField source="location" />
            </ReferenceField>
            <BooleanField source="sleepingBag"/>
            <ActionsColumn label="Actions" textAlign="right" />
          </Datagrid>
        </ReferenceManyField>
        <AddRelatedButton path="deals" target="customerId"/>
      </Tab>
    </TabbedShowLayout>
  </Show>
)