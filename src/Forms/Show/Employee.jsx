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
    EmailField
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
                <TextField source="birthday" />
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
                        <ActionsColumn label="Actions" textAlign="right" />
                    </Datagrid>
                </ReferenceManyField>
                <AddRelatedButton path="deals" target="employeeId"/>
            </Tab>
            <Tab label="Customers" icon={<CustomersIron/>} path="customers">
            <ReferenceManyField
                addLabel={false}
                reference="customers"
                target=""
            >

            </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
)