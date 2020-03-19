import React from 'react';
import { Admin, Resource, ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';
import restProvider from './utils/apiProvider';

import icons from './components/icons'

import { CustomerList } from './Pages/List'
import { CustomerCreate } from './Forms/Create'

const dataProvider = restProvider(process.env.REACT_APP_API_PATH);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="managers"
      icon={icons.managers}
      list={ListGuesser}
    />
    <Resource
      name="customers"
      icon={icons.customers}
      list={CustomerList}
      show={ShowGuesser}
      edit={EditGuesser}
      create={CustomerCreate}
    />
    <Resource
      name="children"
      icon={icons.children}
      list={ListGuesser}
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
