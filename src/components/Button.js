import React from 'react';
import {TouchableOpacity, View, ActivityIndicator} from 'react-native';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import ResponsiveText from "./ResponsiveText";
import Color from "../constants/color";
import LinearGradient from "react-native-linear-gradient";

export default class Button extends React.Component {
  render() {
    const fontSize = this.props.textStyle && this.props.textStyle.fontSize ?
      this.props.textStyle.fontSize :
      undefined;
    const color = this.props.color ? this.props.color : ["#e7161e", "#da151c", "#cd141b", "#c01319", "#b31217"];
    return (
      <LinearGradient
        start={{x: 1, y: 0}} end={{x: 0, y: 0}}
        colors={color}
        style={[styles.gradientStyle, this.props.gradientStyle]}
      >
        <TouchableOpacity
          onPress={this.props.onPress}
          style={[styles.ButtonStyle, this.props.containerStyle]}>
          {
            this.props.leftIcon &&
            <View style={[styles.leftStyle, this.props.leftIconStyle]}>
              {this.props.leftIcon}
            </View>
          }
          {
            this.props.loading && <ActivityIndicator size={"small"} color={"#fff"}/> ||
            this.props.text &&
            <ResponsiveText style={[styles.textStyle, this.props.textStyle]} fontSize={fontSize}>
              {this.props.text}
            </ResponsiveText>
          }
          {
            this.props.right &&
            <View style={[styles.leftStyle, this.props.rightIconStyle]}>
              {this.props.right}
            </View>
          }
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = {
  gradientStyle: {
    borderRadius: 5,
    height: wp("10%"),
    marginVertical: 10,
    elevation: 3,
    shadowOffset: {
      width: null,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowColor: "#c0c0c0",
  },
  ButtonStyle: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: Color.Primary,
    // borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: Color.Primary,

  },
  leftStyle: {},
  textStyle: {
    color: '#fff',
    fontSize: 15,
    // fontWeight: 'bold',
    alignSelf: 'center',
  },
};
