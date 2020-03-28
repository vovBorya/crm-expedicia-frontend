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
  FunctionField
} from 'react-admin';

import PersonIcon from '@material-ui/icons/Person';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';


import AddRelatedButton from '../../components/AddRelatedButton';
import ActionsColumn from '../../components/ActionsColumn';

export default (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Child" icon={ <ChildCareIcon />}>
        <TextField source="id" />
        <TextField source="lastName" />
        <TextField source="firstName" />
        <TextField source="patronymic" />
        <ReferenceField source="parentId" reference="customers">
          <FunctionField render={({lastName,firstName, patronymic}) =>
            `${lastName} ${firstName} ${patronymic}`} />
        </ReferenceField>
      </Tab>
      <Tab label="Parent" icon={<PersonIcon/>} path="customers">
        <ReferenceManyField
          addLabel={false}
          source="parentId"
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
      <Tab label="Deals" icon={ <InsertDriveFileIcon />} path="deals">
        <ReferenceManyField
          addLabel={false}
          reference="deals"
          target="childId"
        >
          <Datagrid>
            <ReferenceField source="expeditionId" reference="expeditions">
              <TextField source="location" />
            </ReferenceField>
            <TextField source="status" />
            <TextField source="sum" />
            <ReferenceField source="employeeId" reference="employees">
              <FunctionField render={({lastName, firstName, patronymic}) =>
                `${lastName} ${firstName} ${patronymic}`} />
            </ReferenceField>
            <ReferenceField source="childId" reference="children">
              <FunctionField render={({lastName, firstName, patronymic}) =>
                `${lastName} ${firstName} ${patronymic}`} />
            </ReferenceField>
            <ActionsColumn label="Actions" textAlign="right" />
          </Datagrid>
        </ReferenceManyField>
        <AddRelatedButton path="deals" target="childId"/>
      </Tab>
    </TabbedShowLayout>
  </Show>
)
