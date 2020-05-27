import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import persistor from './persist';
import store from './store';

const RootStore: React.FC = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

export default RootStore;
