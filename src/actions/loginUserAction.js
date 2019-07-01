import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE, REGISTER_USER_FAILURE,
} from "../constants/reduxConstants";
import {AsyncStorage} from "react-native"
import {NavigationActions, StackActions} from "react-navigation";
import {userSignIn} from "../api/user";

export function loginUserAction(body, navigation) {
  return dispatch => {
    dispatch({
      type: LOGIN_USER_START
    });
    userSignIn(body)
      .then(res => res.data)
      .then(async res => {
        console.warn(res)
        if (res.status == true) {

          let {user, token} = res.data;
          await AsyncStorage.setItem("USER", JSON.stringify(user));
          await AsyncStorage.setItem("TOKEN", JSON.stringify(token));
          dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.data,
          });
          navigation.navigate("MainStack");
        } else {
          dispatch({
            type: REGISTER_USER_FAILURE,
            payload: res.message
          })
        }
      })
      .catch(err => {
        console.warn(err);
      });
  };
}
