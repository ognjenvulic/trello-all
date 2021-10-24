import React, { Suspense, lazy } from 'react';
//import Playground from './Playground/Playground';
import { Switch, Route } from 'react-router-dom';
//const boardPromise = import(/* webpackPreload: true */'../routes/Board/Board');
const Board = lazy(() => import(/* webpackPreload: true */'../routes/Board/Board'));
const Boards = lazy(() => import(/* webpackPreload: true */'../routes/Boards/Boards'));

const App = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Boards} />
          {/* <Route path='/boards' component={Boards} /> */}
          <Route exact path='/board/:slug' component={Board} />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
}

export default App;