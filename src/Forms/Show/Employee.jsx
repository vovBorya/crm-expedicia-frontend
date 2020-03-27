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
    SingleFieldList,
    ChipField
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
        <TextField source="lastName" />
        <TextField source="firstName" />
        <TextField source="patronymic" />
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
          <AddRelatedButton path="deals" target="employeeId"/>
        </Tab>
          <Tab label="Customers" icon={<CustomersIron/>} path="customers">
          <ReferenceManyField label="Customers" reference="deals" target="employeeId">
            <SingleFieldList>
              <ReferenceField label="Author" source="customerId" reference="customers">
                <FunctionField render={({lastName, firstName, patronymic}) => <p>{`${lastName} ${firstName} ${patronymic}`}</p>} />
              </ReferenceField>
            </SingleFieldList>
          </ReferenceManyField>
          </Tab>
      </TabbedShowLayout>
  </Show>
)