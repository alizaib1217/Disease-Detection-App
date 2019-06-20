import React from 'react'
import {Image, View, AsyncStorage} from "react-native";
import {createBottomTabNavigator} from "react-navigation";
import Home from "../screens/Dashboard/Home/Home";
import TestDisease from "../screens/Dashboard/TestDisease/TestDisease";
import Profile from "../screens/Dashboard/Profile/Profile";
import Color from "../constants/color";

const SIZE = 60;

const NavigationOptions = {
  Home: {
    tabBarLabel: "Home",
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require("../../assets/icons/home.png")}
        style={{height: 30, width: 30, tintColor}}
      />
    )
  },
  TestDisease: {
    tabBarLabel: "Detect",
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require("../../assets/icons/add.png")}
        style={{height: 40, width: 40, tintColor}}
      />

    )
  },
  Profile: {
    tabBarLabel: "Profile",
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require("../../assets/icons/profile.png")}
        style={{height: 30, width: 30, tintColor,}}
      />
    )
  },
};

const DashboardTab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: NavigationOptions.Home
    },
    TestDisease: {
      screen: TestDisease,
      navigationOptions: NavigationOptions.TestDisease
    },
    Profile: {
      screen: Profile,
      navigationOptions: NavigationOptions.Profile
    },
  },
  {
    initialRouteName: 'TestDisease',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: Color.Primary,
      inactiveTintColor: Color.Placeholder,
      upperCaseLabel: false,
      style: {
        backgroundColor: "#fff",
      },
    }
  }
);


export default DashboardTab;
