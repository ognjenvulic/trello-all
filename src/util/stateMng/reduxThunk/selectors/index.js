import { createSelector } from 'reselect';

const commonSelector = (state) => (state.common || {});

export const authUserSelector = createSelector(
  commonSelector,
  (common) => {
    return common.authUser;
  }
);

export const boardsSelector = (state) => (state.boards || []);

