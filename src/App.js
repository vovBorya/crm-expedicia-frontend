import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import restProvider from './utils/apiProvider';

import icons from './components/icons'

import { CustomerList } from './Pages/List'
import { CustomerCreate, ChildCreate } from './Forms/Create'
import { CustomerShow } from './Forms/Show'

const dataProvider = restProvider(process.env.REACT_APP_API_PATH);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="employees"
      icon={icons.employees}
      list={ListGuesser}
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
      list={ListGuesser}
      create={ChildCreate}
      edit={EditGuesser}
    />
    <Resource
      name="deals"
      icon={icons.deals}
      list={ListGuesser}
    />
    <Resource
      name="expeditions"
      icon={icons.expeditions}
      list={ListGuesser}
    />
    <Resource
      name="payments"
      icon={icons.payments}
      list={ListGuesser}
    />
  </Admin>
);

export default App;
