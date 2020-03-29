import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
  SelectInput
} from 'react-admin';

import { parse } from 'query-string';

import {dealStatus} from '../../utils/enums';

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
          initialValues={{ expeditionId, employeeId, customerId, childId }}>
        <NumberInput source="sum"/>
        <SelectInput source="status" choices={dealStatus}/>
        <ReferenceInput source="employeeId" reference="employees">
          <AutocompleteInput optionText="fullName"/>
        </ReferenceInput>
        <ReferenceInput source="customerId" reference="customers">
          <AutocompleteInput optionText="fullName"/>
        </ReferenceInput>
        <ReferenceInput source="childId" reference="children">
          <AutocompleteInput optionText="fullName"/>
        </ReferenceInput>
        <ReferenceInput source="expeditionId" reference="expeditions">
          <AutocompleteInput optionText="location"/>
        </ReferenceInput>
        <BooleanInput source="sleepingBag"/>
        <TextInput source="comment"/>
      </SimpleForm>
    </Create>
  )
}