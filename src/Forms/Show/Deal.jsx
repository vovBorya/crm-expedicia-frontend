import React from 'react';

import {
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
  SelectField,
  RichTextField
} from 'react-admin';

import { dealStatus } from '../../utils/enums';

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import AddRelatedButton from '../../components/AddRelatedButton';
import ActionsColumn from '../../components/ActionsColumn';

export default (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Deal" icon={<InsertDriveFileIcon/>}>
        <TextField source="id"/>
        <TextField source="sum"/>
        <SelectField source="status" choices={ dealStatus }/>
        <TextField source="discount" />
        <TextField source="departurePlace" />
        <TextField source="transportationWay" />
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
        <RichTextField source="comment" />
      </Tab>
      <Tab label="Payments" icon={<AttachMoneyIcon/>} path="payments">
        <ReferenceManyField
          addLabel={false}
          reference="payments"
          target="dealId"
        >
          <Datagrid rowClick="show">
            <TextField source="id"/>
            <TextField source="paidAt"/>
            <TextField source="sum"/>
            <ReferenceField source="dealId" reference="deals" link="show">
              <TextField source="id" label="Deal"/>
            </ReferenceField>
            <ActionsColumn label="Actions" textAlign="right"/>
          </Datagrid>
        </ReferenceManyField>
        <AddRelatedButton path="payments" target="dealId"/>
      </Tab>
    </TabbedShowLayout>
  </Show>
)
