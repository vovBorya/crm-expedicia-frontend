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
  FunctionField,
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
        <ReferenceField source="dealId" reference="deals">
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
            <BooleanField source="sleepingBag"/>
            <ActionsColumn label="Actions" textAlign="right" />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  </Show>
)