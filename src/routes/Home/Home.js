import React from 'react';
import BoardBadge from './components/BoardBadge';
// import { Link } from 'react-router-dom';
// import Playground from '../../components/Playground/Playground';

const Home = ({
  authUser,
  boards = []
}) => {
  return (
    <React.Fragment>
      <div>HOME</div>
      {boards && boards.map(board => <BoardBadge key={board.id} board={board}/>)}
    </React.Fragment>
  )
}

export default Home;