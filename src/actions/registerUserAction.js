import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from "../constants/reduxConstants";
import {AsyncStorage} from "react-native"
import {NavigationActions, StackActions} from "react-navigation";
import {userSignUp} from "../api/user";

export function registerUserAction(body, navigation) {
  return dispatch => {
    dispatch({
      type: REGISTER_USER_START
    });
    userSignUp(body)
      .then(res => res.data)
      .then(async res => {
        if (res.status == true) {
          let {user, token} = res.data;
          // // TODO: Get the user's object eg. {name, email, ...}
          await AsyncStorage.setItem("USER", JSON.stringify(user));
          await AsyncStorage.setItem("TOKEN", JSON.stringify(token));
          dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: res.data,
          });
          navigation.navigate("MainStack")

        } else {
          dispatch({
            type: REGISTER_USER_FAILURE,
            payload: res.message
          })
        }
      })
      .catch(err => {
        // console.warn(err);
        // console.warn("Invalid email");

      });
  };
}
