import React from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css, withTheme } from '@emotion/react';
// import cx from 'classnames';
// import commonClasses from 'styles/common/common.scss';
const root = css`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    height: 150px;
`;

function BoardBadge(props) {
  const { board } = props;
  return (
    <div css={css`
    
  `}>
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
