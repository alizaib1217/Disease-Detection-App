import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  USER_LOAD,
  USER_TOKEN
} from "../constants/reduxConstants";

const initialState = {
  user: {},
  token: "",
  isFetching: false,
  error: false
};

export default function userAuthReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload,
        token: action.payload.token,
        error: false
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        user: action.payload
      };
    case REGISTER_USER_START:
      return {
        ...state,

        isFetching: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload,
        token: action.payload.token,
        error: false

      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        user: action.payload,
        error: true
      };
    case USER_LOAD:
      return {
        ...state,
        user: action.payload,
      };
    case USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}

