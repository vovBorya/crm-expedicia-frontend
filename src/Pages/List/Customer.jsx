import React from 'react';
import { 
  useTranslate,
  List, 
  Datagrid, 
  TextField
} from 'react-admin';

import ActionsColumn from '../../components/ActionsColumn'

export default props => {
  const translate = useTranslate();

  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="fullName" />
        <TextField source="city" />
        <TextField source="status" />
        <ActionsColumn label={ translate('common.actions') } textAlign="right"/>
      </Datagrid>
    </List>
  );
}
