import React from 'react';
import { 
  useTranslate,
  List, 
  Datagrid, 
  TextField,
  SelectField
} from 'react-admin';

import { customerStatus } from '../../utils/enums';

import ActionsColumn from '../../components/ActionsColumn'

export default props => {
  const translate = useTranslate();

  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="fullName" />
        <TextField source="city" />
        <SelectField source="status" choices={ customerStatus }/>
        <ActionsColumn label={ translate('common.actions') } textAlign="right"/>
      </Datagrid>
    </List>
  );
}
