import React from 'react';
import { ConnectedRouter } from 'connected-react-router';

import AppRouter from 'src/features/app/router';

import browserHistory from './browserHistory';

const RootRouter: React.FC = () => (
  <ConnectedRouter history={browserHistory}>
    <AppRouter />
  </ConnectedRouter>
);

export default RootRouter;
