import ApiMng from '../../../apiMng/apiMng';
import { FETCH_AUTH_USER, FETCH_BOARDS } from './types';

export const fetchAuthUser = () => async (dispatch) => {
  const res = await ApiMng.getUser();
  
  if (res.data) {
    dispatch({
      type: FETCH_AUTH_USER,
      payload: {
        id: res.data.id,
        avatarUrl: res.data.avatarUrl,
        fullName: res.data.fullName,
        initials: res.data.initials
      },
    });
    dispatch({
      type: FETCH_BOARDS,
      payload: res.data.boards,
    });
  }
};
