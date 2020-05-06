import React from "react";
import {
  Filter,
  ReferenceInput,
  AutocompleteInput,
  SearchInput,
  useTranslate,
} from "react-admin";

import RangeInput from "../../../components/RangeInput";

const translatePath = "resources.children.filters";

const ChildFilter = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <SearchInput title="Full name" source="fullName" alwaysOn />
      <RangeInput
        title={translate(`${translatePath}.ageBetween`)}
        source="ageBetween"
        min={2}
        max={18}
      />
      <ReferenceInput source="parentId" reference="customers">
        <AutocompleteInput optionText="fullName" />
      </ReferenceInput>
    </Filter>
  );
};

export default ChildFilter;
