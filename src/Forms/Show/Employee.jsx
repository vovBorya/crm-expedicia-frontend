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
    EmailField,
    BooleanField,
    SingleFieldList
} from 'react-admin';

import PersonIcon from '@material-ui/icons/Person';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CustomersIron from '@material-ui/icons/ContactPhone';


import AddRelatedButton from '../../components/AddRelatedButton';
import ActionsColumn from '../../components/ActionsColumn';

export default (props) => (
  <Show {...props}>
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
            <Datagrid>
              <TextField source="id"/>
                <TextField source="sum" />
                <TextField source="status" />
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
                  <TextField source="location" />
                </ReferenceField>
                <BooleanField source="sleepingBag"/>
                <ActionsColumn label="Actions" textAlign="right" />
            </Datagrid>
          </ReferenceManyField>
          <AddRelatedButton path="deals" target="employeeId"/>
        </Tab>
          <Tab label="Customers" icon={<CustomersIron/>} path="customers">
          <ReferenceManyField label="Customers" reference="deals" target="employeeId">
            <SingleFieldList>
              <ReferenceField label="Author" source="customerId" reference="customers">
                <FunctionField render={({fullName}) => `${fullName}`} />
              </ReferenceField>
            </SingleFieldList>
          </ReferenceManyField>
          </Tab>
      </TabbedShowLayout>
  </Show>
)