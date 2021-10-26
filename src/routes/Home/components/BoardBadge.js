import React from 'react';
import { Link } from 'react-router-dom';
import { css, withTheme } from '@emotion/react';
// import cx from 'classnames';
// import commonClasses from 'styles/common/common.scss';
const root = props => css`
  height: 150px;
`;

function BoardBadge(props) {
  const { board } = props;
  return (
    <div css={root(props)}>
      <Link to={`/board/${board.id}`}>
        {board.name && <div>{board.name}</div>}
      </Link>
    </div>
  );
}

BoardBadge.defaultProps = {
  board: {},
};

export default withTheme(BoardBadge);
