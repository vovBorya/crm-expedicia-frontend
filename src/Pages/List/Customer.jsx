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
        <TextField source="lastName" />
        <TextField source="firstName" />
        <TextField source="patronymic" />
        <ActionsColumn label={ translate('common.actions') } textAlign="right"/>
      </Datagrid>
    </List>
  );
}
