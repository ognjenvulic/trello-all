import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
const HomeContainer = lazy(() => import('../routes/Home/HomeContainer'));
//const boardPromise = import(/* webpackPreload: true */'../routes/Board/Board');
const Board = lazy(() => import('../routes/Board/Board'));
const Boards = lazy(() => import('../routes/Boards/Boards'));

const App = () => {
  return (
    <React.Fragment>
      <AppBar />
      <div className='Container'>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/boards' component={Boards} />
            <Route exact path='/board/:slug' component={Board} />
          </Switch>
        </Suspense>
      </div>
    </React.Fragment>
  );
};

export default App;
