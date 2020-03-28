import React from 'react';
import {
  Create,
  TabbedForm,
  FormTab,
  ReferenceInput,
  NumberInput,
  AutocompleteInput
} from 'react-admin'

import { DateTimeInput } from '../../components/DateTimeInput';


import { parse } from 'query-string';

export default (props) => {

  const { dealId: paramDealId } = parse(props.location.search);
  const dealId = paramDealId ? parseInt(paramDealId, 10) : undefined;
  const redirect = dealId ? `/deal/${dealId}/show/payment` : 'list';

  return(
    <Create {...props}>
      <TabbedForm>
        <FormTab>
          <DateTimeInput source="paidAt" options={{ format: "yyyy-MM-dd'T'HH:mm"}} valueFormat="yyyy-MM-dd'T'HH:mm" />
          <NumberInput source="sum"/>
          <ReferenceInput source="dealId" reference="deals">
            <AutocompleteInput optionText={ record => {
              if(!record) return undefined;
              return `${record.id}`
            } } />
          </ReferenceInput>
        </FormTab>
      </TabbedForm>
    </Create>
  )
}
