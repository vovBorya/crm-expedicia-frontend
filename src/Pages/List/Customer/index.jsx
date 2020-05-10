import React from 'react';
import { 
  useTranslate,
  List, 
  Datagrid, 
  TextField,
  ReferenceManyField,
  SingleFieldList,
  ChipField
} from 'react-admin';

import ActionsColumn from '../../../components/ActionsColumn'
import Filter from './Filter';

export default props => {
  const translate = useTranslate();

  return (
    <List {...props} filters={<Filter />}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="fullName" />
        <ReferenceManyField
            label="Children"
            reference="children"
            target="parentId"
        >
          <SingleFieldList linkType="show">
            <ChipField source="fullName" />
          </SingleFieldList>
        </ReferenceManyField>
        <ActionsColumn label={ translate('common.actions') } textAlign="right"/>
      </Datagrid>
    </List>
  );
}
