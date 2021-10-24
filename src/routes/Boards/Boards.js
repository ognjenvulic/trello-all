import React from 'react';
import { Link } from 'react-router-dom';

const Boards = () => {
  return (
    <React.Fragment>
      <div>BOARDS</div>
      <div>
        <Link to="/board/1">Board 1</Link>
        <Link to="/board/2">Board 2</Link>
        <Link to="/board/3">Board 3</Link>
      </div>
    </React.Fragment>
  )
}

export default Boards;