import React from 'react';
import { Admin, Resource} from 'react-admin';

import restProvider from './utils/apiProvider';
import i18nProvider from "./i18n/i18nProvider";
import getTheme from './themes/themeProvider'

import icons from './components/icons';

import Dashboard from "./Pages/Dashboard";

import {
  CustomerList,
  EmployeeList,
  ExpeditionList,
  ChildList,
  DealList,
  PaymentList,
  CustomerContactList
} from './Pages/List';

import {
  EmployeeCreate,
  CustomerCreate,
  ChildCreate,
  ExpeditionCreate,
  PaymentCreate,
  DealCreate,
  CustomerContactCreate
} from './Forms/Create';

import {
  CustomerShow,
  EmployeeShow,
  ExpeditionShow,
  ChildShow,
  DealShow,
  PaymentShow,
  CustomerContactShow
} from './Forms/Show';

import {
  CustomerEdit,
  ChildEdit,
  EmployeeEdit,
  ExpeditionEdit,
  PaymentEdit,
  DealEdit,
  CustomerContactEdit
} from './Forms/Edit';

const dataProvider = restProvider(process.env.REACT_APP_API_PATH);

const App = () => (
  <Admin theme={ getTheme() }  dashboard={ Dashboard } dataProvider={dataProvider} i18nProvider={i18nProvider} >
    <Resource
      name="employees"
      icon={icons.employees}
      list={EmployeeList}
      show={EmployeeShow}
      edit={EmployeeEdit}
      create={EmployeeCreate}
    />
    <Resource
      name="customers"
      icon={icons.customers}
      list={CustomerList}
      show={CustomerShow}
      edit={CustomerEdit}
      create={CustomerCreate}
    />
    <Resource
      name="children"
      icon={icons.children}
      list={ChildList}
      show={ChildShow}
      edit={ChildEdit}
      create={ChildCreate}
    />
    <Resource
      name="deals"
      icon={icons.deals}
      list={DealList}
      show={DealShow}
      edit={DealEdit}
      create={DealCreate}
    />
    <Resource
      name="expeditions"
      icon={icons.expeditions}
      list={ExpeditionList}
      show={ExpeditionShow}
      edit={ExpeditionEdit}
      create={ExpeditionCreate}
    />
    <Resource
      name="payments"
      icon={icons.payments}
      list={PaymentList}
      show={PaymentShow}
      edit={PaymentEdit}
      create={PaymentCreate}
    />
    
    <Resource
      name="contacts"
      icon={icons.contacts}
      list={CustomerContactList}
      show={CustomerContactShow}
      edit={CustomerContactEdit}
      create={CustomerContactCreate}
    />
  </Admin>
);

export default App;