import axios from 'axios';
import { FETCH_AUTH_USER } from './types';

export const fetchAuthUser = () => async (dispatch) => {
  const url = 'https://api.trello.com/1/boards/IamibqrO?key=8abff36e8c5249b9abd881cc1bf7afbe&token=725499b47f9d2f84325fa8091a50785b53814e1aa90f13f6879ad7b97bc7e11c';
  const res = await axios.get(url);
  
  if (res.data) {
    dispatch({
      type: FETCH_AUTH_USER,
      payload: {
        id: res.data.id,
        avatarUrl: res.data.avatarUrl,
        fullName: res.data.fullName,
      },
    });
  }
};

//NORMAL LAYOUT
// export const fetchUser = () => {
//   return function (dispatch) {
//     axios
//       .get('/auth/current_user')
//       .then(res => dispatch({
//         type: FETCH_USER,
//         payload: res.data
//       }))
//   }
// };
