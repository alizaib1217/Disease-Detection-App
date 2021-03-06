import {createStackNavigator} from "react-navigation";
import Color from "../constants/color";
import DashboardTab from "./DashboardTab";
import ItemDetail from "../screens/Dashboard/Home/ItemDetail";
import Settings from "../screens/Dashboard/Profile/Settings/Settings";
import LungsDisease from "../screens/Dashboard/TestDisease/LungsDisease/LungsDisease";
import DiabeticRetinopathy from "../screens/Dashboard/TestDisease/DiabeticRetinopathy/DiabeticRetinopathy";
import KneeMri from "../screens/Dashboard/TestDisease/KneeMri/KneeMri";
import TermsAndServices from "../screens/Dashboard/Profile/Settings/static/TermsAndServices";
import PrivacyPolicy from "../screens/Dashboard/Profile/Settings/static/PrivacyPolicy";

const MainStack = createStackNavigator(
  {
    Dashboard: DashboardTab,
    ItemDetail:ItemDetail,
    Settings:Settings,
    LungsDisease:LungsDisease,
    DiabeticRetinopathy:DiabeticRetinopathy,
    KneeMri:KneeMri,
    TermsAndServices:TermsAndServices,
    PrivacyPolicy:PrivacyPolicy,
  },
  {
    initialRouteName: "Dashboard",
    headerMode: 'none',
    cardStyle: {
      backgroundColor: Color.BackgroundColor
    }
  }
);

export default MainStack;
