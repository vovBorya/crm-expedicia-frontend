import React from 'react';

import {
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
  ReferenceManyField,
  Datagrid,
  DateField,
  EmailField,
  ReferenceField,
  BooleanField,
  FunctionField
} from 'react-admin';

import ChildCareIcon from '@material-ui/icons/ChildCare';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CustomersIron from '@material-ui/icons/ContactPhone';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import AddRelatedButton from '../../components/AddRelatedButton';
import ActionsColumn from '../../components/ActionsColumn';

export default (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Deal" icon={<InsertDriveFileIcon/>}>
        <TextField source="id"/>
        <TextField source="sum"/>
        <TextField source="status"/>
        <ReferenceField source="employeeId" reference="employees">
          <FunctionField render={({fullName}) => `${fullName}`} />
        </ReferenceField>
        <ReferenceField source="customerId" reference="customers">
          <FunctionField render={({fullName}) => `${fullName}`} />
        </ReferenceField>
        <ReferenceField source="childId" reference="children">
          <FunctionField render={({fullName}) => `${fullName}`} />
        </ReferenceField>
        <ReferenceField source="expeditionId" reference="expeditions">
          <FunctionField render={({location}) =>
            `${location}`}/>
        </ReferenceField>
        <BooleanField source="sleepingBag"/>
      </Tab>
      <Tab label="Employee" icon={<SupervisedUserCircleIcon/>} path="employees">
        <ReferenceManyField
          addLabel={false}
          source="employeeId"
          reference="employees"
        >
          <Datagrid>
            <TextField source="id" />
            <TextField source="fullName" />
            <DateField source="birthday" />
            <TextField source="phone" />
            <TextField source="salary" />
            <EmailField source="email" />
            <ActionsColumn label="Actions" textAlign="right" />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
      <Tab label="Customer" icon={<CustomersIron/>} path="customers">
        <ReferenceManyField
          addLabel={false}
          source="customerId"
          reference="customers"
        >
          <Datagrid>
            <TextField source="id" />
            <TextField source="fullName" />
            <ActionsColumn label="Actions" textAlign="right" />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
      <Tab label="Child" icon={<ChildCareIcon/>} path="children">
        <ReferenceManyField
          addLabel={false}
          source="childId"
          reference="children"
        >
          <Datagrid>
            <TextField source="id" />
            <TextField source="fullName" />
            <ActionsColumn label="Actions" textAlign="right" />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
      <Tab label="Payments" icon={<AttachMoneyIcon/>} path="payments">
        <ReferenceManyField
          addLabel={false}
          target="dealId"
          reference="payments"
        >
          <Datagrid>
            <TextField source="id"/>
            <TextField source="paidAt"/>
            <TextField source="sum"/>
            <ReferenceField source="dealId" reference="deals">
              <FunctionField render={({id}) => `${id}`}/>
            </ReferenceField>
            <ActionsColumn label="Actions" textAlign="right"/>
          </Datagrid>
        </ReferenceManyField>
        <AddRelatedButton path="payments" target="dealId"/>
      </Tab>
    </TabbedShowLayout>
  </Show>
)