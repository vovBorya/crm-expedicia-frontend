import React from 'react';
import { List, Datagrid,ReferenceField, TextField, EditButton, DeleteButton, FunctionField } from 'react-admin';

import ActionsColumn from '../../components/ActionsColumn'

export default props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="lastName" />
            <TextField source="firstName" />
            <TextField source="patronymic" />
            <ReferenceField source="parentId" reference="customers">
                <FunctionField render={({lastName, 
                    firstName, patronymic}) => `${lastName} ${firstName} ${patronymic}`} />
            </ReferenceField>
            <ActionsColumn label="Actions" textAlign="right"/>
        </Datagrid>
    </List>
)
