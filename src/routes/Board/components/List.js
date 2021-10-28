import React from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css, withTheme } from '@emotion/react';

const root = (props) => css`
  height: 112px;
  padding: 8px;
  background-color: ${props.theme.colors.primary};
  color:${props.theme.colors.neutralWhite};
  border-radius: 3px;
  font-size: 16px;
  font-weight: 700;
`;

function List(props) {
  const { board } = props;
  return (
    <Link to={`/board/${board.shortLink}`}>
      <div css={root(props)}>{board.name && <div>{board.name}</div>}</div>
    </Link>
  );
}

List.defaultProps = {
  board: {},
};

export default withTheme(List);
