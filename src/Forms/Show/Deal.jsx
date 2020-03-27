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

import PersonIcon from '@material-ui/icons/Person';
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
          <FunctionField render={({lastName, firstName, patronymic}) =>
            `${lastName} ${firstName} ${patronymic}`}/>
        </ReferenceField>
        <ReferenceField source="customerId" reference="customers">
          <FunctionField render={({lastName, firstName, patronymic}) =>
            `${lastName} ${firstName} ${patronymic}`}/>
        </ReferenceField>
        <ReferenceField source="childId" reference="children">
          <FunctionField render={({lastName, firstName, patronymic}) =>
            `${lastName} ${firstName} ${patronymic}`}/>
        </ReferenceField>
        <ReferenceField source="expeditionId" reference="expeditions">
          <FunctionField render={({location}) =>
            `${location}`}/>
        </ReferenceField>
        <BooleanField source="sleepingBag"/>
      </Tab>
      <Tab label="Employee" icon={<SupervisedUserCircleIcon/>}>
        <ReferenceManyField
          addLabel={false}
          source="employeeId"
          reference="employees"
        >
          <Datagrid>
            <TextField source="id" />
            <TextField source="lastName" />
            <TextField source="firstName" />
            <TextField source="patronymic" />
            <DateField source="birthday" />
            <TextField source="phone" />
            <TextField source="salary" />
            <EmailField source="email" />
            <ActionsColumn label="Actions" textAlign="right" />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
      <Tab label="Customer" icon={<CustomersIron/>}>
        <ReferenceManyField
          addLabel={false}
          source="customerId"
          reference="customers"
        >
          <Datagrid>
            <TextField source="id" />
            <TextField source="lastName" />
            <TextField source="firstName" />
            <TextField source="patronymic" />
            <ActionsColumn label="Actions" textAlign="right" />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
      <Tab label="Child" icon={<ChildCareIcon/>}>
        <ReferenceManyField
          addLabel={false}
          source="childId"
          reference="children"
        >
          <Datagrid>
            <TextField source="id" />
            <TextField source="lastName" />
            <TextField source="firstName" />
            <TextField source="patronymic" />
            <ActionsColumn label="Actions" textAlign="right" />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
      <Tab label="Payments" icon={<AttachMoneyIcon/>}>
        <ReferenceManyField
          addLabel={false}
          resource="dealId"
          reference="payments"
        >
          <Datagrid>
            <TextField source="id"/>
            <TextField source="paidAt"/>
            <TextField source="sum"/>
            <ActionsColumn label="Actions" textAlign="right"/>
          </Datagrid>
        </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  </Show>
)