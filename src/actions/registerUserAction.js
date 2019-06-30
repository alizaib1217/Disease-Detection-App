import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from "../constants/reduxConstants";
import {AsyncStorage} from "react-native"
import {NavigationActions, StackActions} from "react-navigation";

export function registerUserAction(body, navigation) {
  return dispatch => {
    dispatch({
      type: REGISTER_USER_START
    });
    let user = {

      name: "Ali Zaib",
      email: "alizaib1217@gmail.com",
      token: "abcd"
    };
    AsyncStorage.setItem("USER", JSON.stringify(user));
    AsyncStorage.setItem("TOKEN", JSON.stringify(user.token));
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: user,
    });
  };
}
