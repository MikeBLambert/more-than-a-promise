import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux';
import SearchField from './SearchField';
import Suggestions from './Suggestions';

const App = () => (
  <Provider store={store}>
    <div>
      <SearchField />
      <Suggestions />
    </div>
  </Provider>
);

export default App;
