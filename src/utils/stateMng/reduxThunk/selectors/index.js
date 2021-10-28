import { createSelector } from 'reselect';

const commonSelector = (state) => state.common || {};

export const authUserSelector = createSelector(commonSelector, (common) => {
  return common.authUser;
});

export const boardsSelector = (state) => state.boards || [];

export const boardByShortLinkSelector = createSelector(
  [boardsSelector, (state, shortLink) => shortLink],
  (boards, shortLink) =>
    boards &&
    boards.length &&
    boards.find((board) => board.shortLink === shortLink)
);
