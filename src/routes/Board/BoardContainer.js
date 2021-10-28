import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Board from './Board';
import { fetchBoard } from '../../utils/stateMng/reduxThunk/actions';
import {
  authUserSelector,
  boardByShortLinkSelector,
} from '../../utils/stateMng/reduxThunk/selectors';

const BoardContainer = ({ authUser, board, fetchBoard, match }) => {
  const shortLink = match.params.shortLink;

  useEffect(() => {
    fetchBoard(shortLink);
  }, [shortLink, fetchBoard]);

  return <Board authUser={authUser} board={board} />;
};

const mapActionCreators = {
  fetchBoard: fetchBoard,
};

const mapStateToProps = (state, ownProps) => {
  return {
    authUser: authUserSelector(state),
    board: boardByShortLinkSelector(state, ownProps.match.params.shortLink),
  };
};

export default connect(mapStateToProps, mapActionCreators)(BoardContainer);
