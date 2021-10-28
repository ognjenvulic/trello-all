import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
/** @jsxImportSource @emotion/react */
import { css, withTheme } from '@emotion/react';
import BoardBadge from './components/BoardBadge';

const root = (theme) => css`
  width: 100%;
  max-width: ${theme.constans.maxWidth};
  margin: 40px auto 0;
`;

const menuItem = (theme) => css`
  color: ${theme.colors.primary};
  font-size: 16px;
  font-weight: 700;
  background: #e4f0f6;
  width: 90%;
  padding: 8px 6px;
  border-radius: 4px;
`;

const Home = ({ boards = [], theme }) => {
  return (
    <div css={root(theme)}>
      <Grid>
        <Row>
          <Col sm={0} md={3}>
            <div css={menuItem(theme)}>
              <Link to={`/`}>Boards</Link>
            </div>
          </Col>
          <Col sm={12} md={9}>
            <Row start='xs'>
              {boards &&
                boards.map &&
                boards.map((board) => (
                  <Col key={board.id} xs={12} md={6} lg={3}>
                    <BoardBadge board={board} />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default withTheme(Home);
