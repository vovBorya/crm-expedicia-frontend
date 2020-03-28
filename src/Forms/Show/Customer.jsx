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
  useTranslate
} from 'react-admin';

import PersonIcon from '@material-ui/icons/Person';
import ContactsIcon from '@material-ui/icons/Contacts';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';


import AddRelatedButton from '../../components/AddRelatedButton';
import ActionsColumn from '../../components/ActionsColumn';

const translatePath = 'resources.customers.forms.show';

export default (props) => {
  const translate = useTranslate();

  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label={ translate(`${translatePath}.summaryTab`) } icon={ <PersonIcon /> }>
          <TextField source="id" />
          <TextField source="lastName" />
          <TextField source="firstName" />
          <TextField source="patronymic" />
        </Tab>
        <Tab label={ translate(`${translatePath}.contactsTab`) } icon={ <ContactsIcon />} path="contacts">
          <ReferenceManyField
            addLabel={false}
            reference="contacts"
            target="customerId"
          >
            <Datagrid>
              <TextField source="type" />
              <TextField source="content" />
              <ActionsColumn label="Actions" textAlign="right"/>
            </Datagrid>
          </ReferenceManyField>
          <AddRelatedButton path="contacts" target="customerId"/>
        </Tab>
        <Tab label={ translate(`${translatePath}.childrenTab`) } icon={ <ChildCareIcon />} path="children">
          <ReferenceManyField
            addLabel={false}
            reference="children"
            target="parentId"
          >
            <Datagrid>
              <TextField source="lastName" />
              <TextField source="firstName" />
              <TextField source="patronymic" />
              <DateField source="birthday" />
              <ReferenceField source="parentId" reference="customers">
                <FunctionField render={({lastName,
                                          firstName, patronymic}) => `${lastName} ${firstName} ${patronymic}`} />
              </ReferenceField>
              <ActionsColumn label="Actions" textAlign="right" />
            </Datagrid>
          </ReferenceManyField>
          <AddRelatedButton path="children" target="parentId"/>
        </Tab>
        <Tab label={ translate(`${translatePath}.dealsTab`) } icon={ <InsertDriveFileIcon />} path="deals">
          <ReferenceManyField
            addLabel={false}
            reference="deals"
            target="customerId"
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
              <ActionsColumn label="Actions" textAlign="right" />
            </Datagrid>
          </ReferenceManyField>
          <AddRelatedButton path="deals" target="customerId"/>
        </Tab>

      </TabbedShowLayout>
    </Show>
  );
}
