import { Route, IndexRoute } from 'react-router';
import React from 'react';

import Wrapper from './Wrapper';
import Splash from './containers/Splash';

const routes = (
  <Route path="/" component={Wrapper} >
    <IndexRoute component={Splash} />
  </Route>
);

export default routes;
