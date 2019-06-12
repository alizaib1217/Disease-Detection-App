import React from 'react';
import {Text} from 'react-native';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Color from "../constants/color";
import Fonts from "../constants/fonts";

export default class ResponsiveText extends React.Component {
  render() {
    let fontSize = wp('4%');
    if (this.props.style && this.props.style.fontSize) {
      fontSize = wp(this.props.style.fontSize);
    } else if (this.props.fontSize) {
      fontSize = wp(this.props.fontSize);
    }
    return (
      <Text style={[styles.text, this.props.style, {fontSize}]} >{this.props.children}</Text>
    )
  }
}

const styles = {
  text: {
    color: Color.PrimaryText,
    fontFamily:Fonts.CrimsonText
  }
};
