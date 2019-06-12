import React, {Component} from 'react';
import {StatusBar, TouchableOpacity, View} from "react-native";
import {widthPercentageToDP} from "react-native-responsive-screen";
import Color from "../constants/color";
import LinearGradient from 'react-native-linear-gradient';

export default class AppHeader extends Component {
  render() {
    return (
      <LinearGradient
        start={{x: 1, y: 0}} end={{x: 0, y: 0}}
        colors={["#e7161e", "#da151c", "#cd141b", "#c01319", "#b31217"]}
        style={[styles.customStyle, this.props.containerStyle]}
      >
        <View style={[styles.left, this.props.leftStyle]}>
          {
            this.props.left &&
            <TouchableOpacity style={{padding: 10}} onPress={this.props.leftPress}>
              {this.props.left}
            </TouchableOpacity>
          }
        </View>
        <View style={[styles.body, this.props.bodyStyle]}>
          {
            this.props.body &&
            this.props.body
          }
        </View>

        <View style={[styles.right, this.props.rightStyle]}>
          {
            this.props.right &&
            <TouchableOpacity onPress={this.props.rightPress}>
              {this.props.right}
            </TouchableOpacity>
          }
        </View>
      </LinearGradient>
    );
  }
}
const styles = {
  customStyle: {
    height: widthPercentageToDP("15%"),
    width: "100%",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: "row",
    backgroundColor: Color.Primary,
  },
  left: {
    flex: 1,
  },
  body: {
    flex: 4,
    alignItems: "center"
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
  },
};
