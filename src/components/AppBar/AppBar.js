import React from 'react';
import { connect } from 'react-redux';
import { authUserSelector } from '../../util/stateMng/reduxThunk/selectors';
import { Link } from 'react-router-dom';
// import cx from 'classnames';
// import commonClasses from 'styles/common/common.scss';
import './AppBar.scss';

function AppBar({authUser}) {
  return <div className='AppBarWrapper'>
    <Link to='/'> <img className='Logo' 
      src='https://a.trellocdn.com/prgb/dist/images/header-logo-spirit.d947df93bc055849898e.gif'
      alt="logo"/>
      </Link>
    {authUser && authUser.initials && <div className='Avatar'>{authUser.initials}</div>}
  </div>;
}

AppBar.defaultProps = {
  authUser: {},
};

const mapActionCreators = {};

const mapStateToProps = (state) => {
  return {
    authUser: authUserSelector(state)
  };
};

export default connect(mapStateToProps, mapActionCreators)(AppBar);
