import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
  SelectField,
  BooleanInput,
  SelectInput
} from 'react-admin';

import { parse } from 'query-string';

import {dealStatus} from '../../utils/enums';

import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

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

  const valueText = (value) => `${dealStatus[value-1].name}`;


  return(
    <Edit {...props}>
      <SimpleForm redirect={[
        redirectExpedition,
        redirectEmployee,
        redirectCustomer,
        redirectChild]}
                  initialValues={{ expeditionId }}>
        <NumberInput source="sum"/>
        <SelectInput source="status" choices={dealStatus}/>

        {/*<TextInput source="status" id="select" value={dealStatus} select>
          <MenuItem value={0}>Created</MenuItem>
          <MenuItem value={1}>Prepaid expanse</MenuItem>
          <MenuItem value={2}>Partial payment</MenuItem>
          <MenuItem value={3}>Fully paid</MenuItem>
          <MenuItem value={4}>Completed</MenuItem>
          <MenuItem value={5}>Canceled</MenuItem>
        </TextInput>*/}

        {/*<Typography gutterBottom>Status</Typography>
        <Slider
          defaultValue={0}
          valueLabelDisplay="on"
          valueLabelFormat={valueText}
          aria-labelledby="discrete-slider-restrict"
          marks={dealStatus}
          step={1}
          min={1}
          max={6}
        />*/}
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
        <TextInput source="comment"/>
      </SimpleForm>
    </Edit>
  )
}