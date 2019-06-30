import {createStackNavigator} from "react-navigation";
import Login from "../screens/Authentication/Login";
import Color from "../constants/color";
import Register from "../screens/Authentication/Register";
import ForgotPassword from "../screens/Authentication/ForgotPassword";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Register:Register,
    ForgotPassword:ForgotPassword
  },
  {
    initialRouteName: "Login",
    headerMode: 'none',
    cardStyle: {
      backgroundColor: Color.BackgroundColor
    }
  }
);

export default AuthStack;
