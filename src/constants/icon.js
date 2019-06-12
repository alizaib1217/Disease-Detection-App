import React from "react";
import {Image} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import email from "../../assets/icons/email_icon.png"
import password from "../../assets/icons/password_icon.png"
import back from "../../assets/icons/back.png"
import settings from "../../assets/icons/seetings.png"
import profile from "../../assets/icons/profile.png"
import occupation from "../../assets/icons/occupation.png"
import Color from "./color";


const Icons = {
  //AUTH ICONS
  Email: (style = {}) => <Image source={email} style={[styles.signInIconStyle, style]}/>,
  Password: (style = {}) => <Image source={password} style={[styles.signInIconStyle, style]}/>,
  Back: (style = {}) => <Image source={back} style={[styles.signInIconStyle, style]}/>,
  Settings: (style = {}) => <Image source={settings} style={[styles.signInIconStyle, style]}/>,
  Profile: (style = {}) => <Image source={profile} style={[styles.signInIconStyle, style]}/>,
  Occupation: (style = {}) => <Image source={occupation} style={[styles.signInIconStyle, style]}/>,
};

const styles = {
  signInIconStyle: {
    tintColor:Color.PrimaryText,
    height: wp("5%"),
    resizeMode: "contain",
  },
  board: {
    height: 20,
    width: 20
  },
  flagStyle: {
    height: 70,
    width: 100,
  },
  categoryItemIcon: {
    height: hp("7%"),
    width: hp("7%"),
    resizeMode: "contain"
  },
  walletIcons: {
    height: hp("8%"),
    width: hp("8%"),
    resizeMode: "contain",
  }
};


export default Icons;
