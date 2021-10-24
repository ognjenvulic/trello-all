import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
      <div>HOME</div>
      <div>
        <Link to="/boards">Boards</Link>
      </div>
    </React.Fragment>
  )
}

export default Home;