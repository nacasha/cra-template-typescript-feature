import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { RootRouter } from './router';
import { RootStore } from './store';

const App: React.FC = () => (
  <HelmetProvider>
    <Helmet
      defaultTitle="React App"
      titleTemplate="%s - React App"
    />

    <RootStore>
      <RootRouter />
    </RootStore>
  </HelmetProvider>
);

export default App;
