import React from "react";
import {StyleSheet, TouchableOpacity, TextInput, View} from "react-native";
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from "react-native-responsive-screen";
import ResponsiveText from "./ResponsiveText";
import Color from "../constants/color";
import Fonts from "../constants/fonts";


export default class InputField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  onFocus() {
    this.setState({active: true});
    if (this.props.onFocus)
      this.props.onFocus();
  }

  onBlur() {
    this.setState({active: false});
    if (this.props.onBlur)
      this.props.onBlur();
  }

  render() {
    return (
      <View style={this.props.parentStyle}>
        {
          this.props.label &&
          <ResponsiveText style={{color: Color.Placeholder, fontSize: "4%"}}>{this.props.label}</ResponsiveText>
        }
        <View style={[styles.container, this.props.containerStyle]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {
              this.props.leftIcon &&
              <View style={[this.props.leftStyle, styles.leftStyle]}>
                {this.props.leftIcon}
              </View>
            }
            <TextInput
              onChangeText={this.props.onChangeText}
              style={[styles.inputField, this.props.inputField]}
              placeholder={this.props.placeholder}
              underlineColorAndroid={"transparent"}
              placeholderTextColor={Color.Placeholder}
              value={this.props.value}
              keyboardType={this.props.keyboardType ? this.props.keyboardType : "default"}
              secureTextEntry={this.props.secureTextEntry ? this.props.secureTextEntry : false}
              multiline={this.props.multiline}
              numberOfLines={this.props.numberOfLines ? 5 : 1}
              onBlur={this.onBlur.bind(this)}
              onFocus={this.onFocus.bind(this)}
              editable={this.props.editable}
              returnKeyType={this.props.search}
              onSubmitEditing={this.props.onSubmit}
            />
          </View>
          {
            this.props.right &&
            <TouchableOpacity style={[this.props.rightStyle, styles.rightStyle]}>
              {this.props.right}
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    borderRadius: 5,
    borderColor: Color.BorderColor,
    backgroundColor: Color.PlaceholderBackground,
    borderWidth: 1,
    height: 40
  },
  leftStyle: {
    paddingHorizontal: 10,
  },
  inputField: {
    flex: 1,
    width: '100%',
    fontWeight: "300",
    fontSize: wp("3.5%"),
    color: "#111111",
    fontFamily:Fonts.CrimsonText
  },
  inputLabel: {
    color: "#969696",
    fontSize: 18
  },
  rightStyle: {}
});
