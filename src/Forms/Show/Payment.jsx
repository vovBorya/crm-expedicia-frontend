import React from 'react';

import {
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
  DateField,
  ReferenceField,
} from 'react-admin';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

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
    </TabbedShowLayout>
  </Show>
)