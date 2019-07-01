import React from "react";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import Color from "./color";
import ResponsiveText from "../components/ResponsiveText";

const styles = {
  defaultText: {
    fontSize: "5%",
    color: Color.PrimaryText
  },
  textStyle: {
    color: Color.Placeholder,
    fontSize: "3.5%"
  },

}


const ItemText = {
  TestResults: (style = {}) => <ResponsiveText style={{...styles.defaultText, ...style}}>Test Results</ResponsiveText>,
  Profile: (style = {}) => <ResponsiveText style={{...styles.defaultText, ...style}}>Profile</ResponsiveText>,
  Settings: (style = {}) => <ResponsiveText style={{...styles.defaultText, ...style}}>Settings</ResponsiveText>,
  AddTest: (style = {}) => <ResponsiveText style={{...styles.defaultText, ...style}}>Disease Detection</ResponsiveText>,
  Terms: (style = {}) => <ResponsiveText style={{...styles.defaultText, ...style}}>Terms & Condition</ResponsiveText>,
  Privacy: (style = {}) => <ResponsiveText style={{...styles.defaultText, ...style}}>Privacy Policy</ResponsiveText>,
  Text: (style = {}, text = "") => <ResponsiveText style={{...styles.defaultText, ...style}}>{text}</ResponsiveText>,
};
export default ItemText;
