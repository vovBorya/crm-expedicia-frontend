import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
  SelectField,
  BooleanInput
} from 'react-admin';

import { parse } from 'query-string';

import {dealStatus} from '../../utils/enums';

import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default (props) => {

  const {expeditionId : paramExpeditionId} = parse(props.location.search);
  const expeditionId = paramExpeditionId ? parseInt(paramExpeditionId, 10): undefined;
  const redirectExpedition = expeditionId ? `/expedition/${expeditionId}/show/deals`: 'list';

  const {employeeId : paramEmployeeId} = parse(props.location.search);
  const employeeId = paramEmployeeId ? parseInt(paramEmployeeId, 10): undefined;
  const redirectEmployee = employeeId ? `/employee/${employeeId}/show/deals`: 'list';

  const {customerId : paramCustomerId} = parse(props.location.search);
  const customerId = paramCustomerId ? parseInt(paramCustomerId, 10): undefined;
  const redirectCustomer = customerId ? `/customer/${customerId}/show/deals`: 'list';

  const {childId : paramChildId} = parse(props.location.search);
  const childId = paramChildId ? parseInt(paramChildId, 10): undefined;
  const redirectChild = childId ? `/childred/${childId}/show/deals`: 'list';

  return(
    <Create {...props}>
      <SimpleForm redirect={[
        redirectExpedition,
        redirectEmployee,
        redirectCustomer,
        redirectChild]}
          initialValues={{ expeditionId }}>
        <NumberInput source="sum"/>
        <TextInput source="status" id="select" value={dealStatus} select>
          <MenuItem value={0}>Created</MenuItem>
          <MenuItem value={1}>Prepaid expanse</MenuItem>
          <MenuItem value={2}>Partial payment</MenuItem>
          <MenuItem value={3}>Fully paid</MenuItem>
          <MenuItem value={4}>Completed</MenuItem>
          <MenuItem value={5}>Canceled</MenuItem>
        </TextInput>
        <TextInput source="comment"/>
        <ReferenceInput source="employeeId" reference="employees">
          <AutocompleteInput optionText={ record => {
            if(!record) return undefined;
            return `${record.lastName} ${record.firstName} ${record.patronymic}`
          }}/>
        </ReferenceInput>
        <ReferenceInput source="customerId" reference="customers">
          <AutocompleteInput optionText={ record => {
            if(!record) return undefined;
            return `${record.lastName} ${record.firstName} ${record.patronymic}`
          }}/>
        </ReferenceInput>
        <ReferenceInput source="childId" reference="children">
          <AutocompleteInput optionText={ record => {
            if(!record) return undefined;
            return `${record.lastName} ${record.firstName} ${record.patronymic}`
          }}/>
        </ReferenceInput>
        <ReferenceInput source="expeditionId" reference="expeditions">
          <AutocompleteInput optionText={ record => {
            if(!record) return undefined;
            return `${record.location}`
          }}/>
        </ReferenceInput>
        <BooleanInput source="sleepingBag"/>
      </SimpleForm>
    </Create>
  )
}