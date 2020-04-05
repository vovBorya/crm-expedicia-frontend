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


import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


import ActionsColumn from '../../components/ActionsColumn';

export default (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Payment" icon={<AttachMoneyIcon/>}>
        <TextField source="id"/>
        <DateField source="paidAt"/>
        <ReferenceField source="dealId" reference="deals" link="show">
          <TextField source="id" label="Deal"/>
        </ReferenceField>
        <TextField source="sum"/>
      </Tab>
      <Tab label="Deal" icon={<InsertDriveFileIcon/>} path="deals">
        <ReferenceManyField
          addLabel={false}
          source="dealId"
          reference="deals"
        >
          <Datagrid rowClick="show">
            <TextField source="id"/>
            <TextField source="sum"/>
            <TextField source="status"/>
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
      </Tab>
    </TabbedShowLayout>
  </Show>
)