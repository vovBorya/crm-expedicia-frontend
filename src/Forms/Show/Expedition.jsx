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
    FunctionField
} from 'react-admin';

import ExpeditionIcon from '@material-ui/icons/Deck';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';


import AddRelatedButton from '../../components/AddRelatedButton';
import ActionsColumn from '../../components/ActionsColumn';


export default (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Summary" icon={ <ExpeditionIcon/> }>
                <TextField source="id" />
                <TextField source="location" />
                <TextField source="abbreviation" />
            </Tab>
            <Tab label="Deals" icon={ <InsertDriveFileIcon />} path="deals">
                <ReferenceManyField
                    addLabel={false}
                    reference="deals"
                    target="expeditionId"
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
)