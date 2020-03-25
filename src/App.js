import React from 'react';
import { Admin, Resource, ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';
import restProvider from './utils/apiProvider';

import icons from './components/icons'

import { CustomerList, EmployeeList, ExpeditionList, ChildList } from './Pages/List'
import { EmployeeCreate, CustomerCreate, ChildCreate, ExpeditionCreate, PaymentCreate } from './Forms/Create'
import { CustomerShow, EmployeeShow, ExpeditionShow, ChildShow } from './Forms/Show'

const dataProvider = restProvider(process.env.REACT_APP_API_PATH);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="employees"
      icon={icons.employees}
      list={EmployeeList}
      show={EmployeeShow}
      edit={EditGuesser}
      create={EmployeeCreate}
    />
    <Resource
      name="customers"
      icon={icons.customers}
      list={CustomerList}
      show={CustomerShow}
      edit={EditGuesser}
      create={CustomerCreate}
    />
    <Resource
      name="children"
      icon={icons.children}
      list={ChildList}
      show={ChildShow}
      edit={EditGuesser}
      create={ChildCreate}
    />
    <Resource
      name="deals"
      icon={icons.deals}
      list={ListGuesser}
    />
    <Resource
      name="expeditions"
      icon={icons.expeditions}
      list={ExpeditionList}
      show={ExpeditionShow}
      edit={EditGuesser}
      create={ExpeditionCreate}
    />
    <Resource
      name="payments"
      icon={icons.payments}
      list={ListGuesser}
    />
  </Admin>
);

export default App;
