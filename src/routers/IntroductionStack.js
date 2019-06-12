import {createStackNavigator} from "react-navigation";
import Splash from "../screens/Introduction/Splash";
import Color from "../constants/color";

const IntroductionStack = createStackNavigator(
  {
    Splash: Splash,
  },
  {
    initialRouteName: "Splash",
    headerMode: 'none',
    cardStyle: {
      backgroundColor: Color.BackgroundColor
    }
  }
);

export default IntroductionStack;
