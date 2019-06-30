import {USER_LOAD,USER_TOKEN} from "../constants/reduxConstants";

export function loadUserInState(user) {
  return dispatch => {
    dispatch({
      type: USER_LOAD,
      payload: user
    })
  };
}

export function loadUserTokenInState(token) {
  return dispatch => {
    dispatch({
      type: USER_TOKEN,
      payload: token
    })
  };
}
