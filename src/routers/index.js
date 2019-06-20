import {createAppContainer, createSwitchNavigator} from "react-navigation";
import IntroductionStack from "./IntroductionStack";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const Router = createSwitchNavigator(
  {
    Intro: IntroductionStack,
    Auth: AuthStack,
    MainStack: MainStack,
  },
  {
    initialRouteName: "Intro"
  }
);

const AppContainer = createAppContainer(Router);

export default AppContainer;
