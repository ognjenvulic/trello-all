import React from 'react';
import { Link } from 'react-router-dom';
import Playground from '../../components/Playground/Playground';

const Home = ({
  authUser
}) => {
  return (
    <React.Fragment>
      <div>HOME</div>
      <div>
        {authUser ? authUser.id : 'NO USER'}
        {/* <Link to="/boards">Boards</Link>
        <Playground/> */}
      </div>
    </React.Fragment>
  )
}

export default Home;