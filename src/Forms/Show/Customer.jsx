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
  useTranslate,
  BooleanField,
  RichTextField,
  SelectField
} from 'react-admin';

import { contactType } from '../../utils/enums';
import { customerStatus } from '../../utils/enums';

import PersonIcon from '@material-ui/icons/Person';
import ContactsIcon from '@material-ui/icons/Contacts';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';


import AddRelatedButton from '../../components/AddRelatedButton';
import ActionsColumn from '../../components/ActionsColumn';

import CustomerName from '../../components/ShowTitle';

const translatePath = 'resources.customers.forms.show';

export default (props) => {
  const translate = useTranslate();

  return (
    <Show title={<CustomerName />} {...props}>
      <TabbedShowLayout>
        <Tab label={ translate(`${translatePath}.summaryTab`) } icon={ <PersonIcon /> }>
          <TextField source="id" />
          <TextField source="fullName" />
          <TextField source="city" />
          <SelectField source="status" choices={ customerStatus }/>
          <RichTextField source="exemptions"/>
        </Tab>
        <Tab label={ translate(`${translatePath}.contactsTab`) } icon={ <ContactsIcon />} path="contacts">
          <ReferenceManyField
            addLabel={false}
            reference="contacts"
            target="customerId"
          >
            <Datagrid rowClick="show">
              <SelectField source="type" choices={ contactType }/>
              <TextField source="content" />
              <ReferenceField source="customerId" reference="customers">
                <TextField source="fullName" show="link"/>
              </ReferenceField>
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
            <Datagrid rowClick="show">
              <TextField source="fullName" />
              <DateField source="birthday" />
              <ReferenceField source="parentId" reference="customers" link="show">
                <TextField source="fullName" />
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
            <Datagrid rowClick="show">
              <TextField source="id"/>
              <TextField source="sum" />
              <TextField source="status" />
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
          <AddRelatedButton path="deals" target="customerId"/>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
}
