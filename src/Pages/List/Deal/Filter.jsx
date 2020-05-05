import React from "react";
import {
  Filter,
  ReferenceInput,
  AutocompleteInput,
  SelectInput,
  BooleanInput
} from "react-admin";

import RangeInput from "../../../components/RangeInput";

import {dealStatus} from "../../../utils/enums";

const DealFilter = (props) => (
  <Filter {...props}>
    <SelectInput source="status" choices={dealStatus}/>
    <RangeInput
      title={"Sum between"}
      source="sumBetween"
      min={0}
      max={40000}
    />
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
  </Filter>
);

export default DealFilter;