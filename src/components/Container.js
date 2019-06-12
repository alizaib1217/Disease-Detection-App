import React from "react";
import {
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar, View,
} from "react-native";
import Color from "../constants/color";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const {statusBarColor, backgroundImageStyle} = this.props;
    let color = statusBarColor ? statusBarColor : "#B41217";
    let barStyle = this.props.barStyle ? this.props.barStyle : "light-content";
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <StatusBar backgroundColor={color} barStyle={barStyle}
          // translucent={this.props.translucent || false}
        />
        {
          this.props.backgroundImage &&
          <Image source={this.props.backgroundImage} style={[styles.backgroundImage, backgroundImageStyle]}/>
        }
        {this.props.children}
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  backgroundImage: {
    position: 'absolute',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
};
