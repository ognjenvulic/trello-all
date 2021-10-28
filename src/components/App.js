import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
const HomeContainer = lazy(() => import('../routes/Home/HomeContainer'));
//const boardPromise = import(/* webpackPreload: true */'../routes/Board/Board');
const BoardContainer = lazy(() => import('../routes/Board/BoardContainer'));

const App = () => {
  return (
    <React.Fragment>
      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/board/:shortLink' component={BoardContainer} />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};

export default App;
