import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import { fetchAuthUser } from '../../util/stateMng/reduxThunk/actions';
import { authUserSelector, boardsSelector } from '../../util/stateMng/reduxThunk/selectors';

//Container should do the data manipulation (fetching, global state connect) to make presentational component cleaner.
//With Hooks some argue not to do Container Pattern but to use custom hooks.
//This is just for demonstration. I think that in smaller apps it's an overkill :) 
const HomeContainer = ({ authUser, boards, fetchAuthUser }) => {

  useEffect(() => {
    fetchAuthUser();
  }, [fetchAuthUser]);

  return (
    <Home
      authUser = {authUser}
      boards = {boards}
    />
  )
}

const mapActionCreators = {
  fetchAuthUser: fetchAuthUser,
};

const mapStateToProps = (state) => {
  return {
    authUser: authUserSelector(state),
    boards: boardsSelector(state)
  };
};

export default connect(mapStateToProps, mapActionCreators)(HomeContainer);
