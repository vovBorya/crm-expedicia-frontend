import React from 'react';
import { DeleteButton, EditButton, ShowButton, FunctionField } from "react-admin";

export default ({ label, show = true, edit = true, destroy = true, ...props}) => (
  <FunctionField {...props} render={record => [
    show && <ShowButton {...props} record={record} />,
    edit && <EditButton {...props} record={record} />,
    destroy && <DeleteButton {...props} record={record} />
  ] } />
);