import React from 'react';
import {
  Edit,
  SimpleForm,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
  TextInput,
  SelectInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

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

  const redirect = (expeditionId && redirectExpedition) ||
    (employeeId && redirectEmployee) ||
    (customerId && redirectCustomer) ||
    (childId &&  redirectChild)

  return(
    <Edit {...props}>
      <SimpleForm 
        redirect={redirect}
        initialValues={{ expeditionId, employeeId, customerId, childId  }}
      >
        <NumberInput source="sum"/>
        <SelectInput source="status" choices={dealStatus}/>
        <TextInput source="discount" />
        <TextInput source="departurePlace" />
        <TextInput source="transportationWay" />
        <ReferenceInput source="employeeId" reference="employees">
          <AutocompleteInput optionText="fullName" />
        </ReferenceInput>
        <ReferenceInput source="customerId" reference="customers">
          <AutocompleteInput optionText="fullName" />
        </ReferenceInput>
        <ReferenceInput source="childId" reference="children">
          <AutocompleteInput optionText="fullName" />
        </ReferenceInput>
        <ReferenceInput source="expeditionId" reference="expeditions">
          <AutocompleteInput optionText="location" />
        </ReferenceInput>
        <BooleanInput source="sleepingBag"/>
        <RichTextInput toolbar={[ ['bold', 'italic', 'underline'] ]} source="comment"/>
      </SimpleForm>
    </Edit>
  );
};
