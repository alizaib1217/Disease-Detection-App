import React from "react";
import {TouchableOpacity, Image, FlatList, Dimensions, PermissionsAndroid, AsyncStorage, View} from 'react-native'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Color from "../../../../constants/color";
import ResponsiveText from "../../../../components/ResponsiveText";

const {width} = Dimensions.get('window');

export default class SettingsItem extends React.Component {
  render() {
    const {text} = this.props;
    return (
      <View style={{
        borderBottomWidth: 1,
        borderColor: Color.BorderColor,
      }}>
        <TouchableOpacity onPress={this.props.onPress} style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,

        }}>
          <ResponsiveText>{text}</ResponsiveText>
          <Image
            source={require("../../../../../assets/icons/right.png")}
            style={{height: wp("5%"), resizeMode: "contain"}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = {
  logo: {
    alignSelf: "center",
    width: wp("50%"),
    resizeMode: "contain"
  }
};
