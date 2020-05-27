import React from 'react';
import { Switch, Route } from 'react-router';

import AppLayout from '../containers/AppLayout';

import FeaturesPage from '../pages/FeaturesPage';
import IncludesPage from '../pages/IncludesPage';
import MainPage from '../pages/MainPage';

const AppRouter: React.FC = () => (
  <Switch>
    {/* <Route path="/layoutless" component={LayoutlessPage} exact /> */}

    <AppLayout>
      <Route path="/" component={MainPage} exact />
      <Route path="/includes" component={IncludesPage} exact />
      <Route path="/features" component={FeaturesPage} exact />

      {/* <OtherFeatureRouter /> */}
    </AppLayout>
  </Switch>
);

export default AppRouter;
