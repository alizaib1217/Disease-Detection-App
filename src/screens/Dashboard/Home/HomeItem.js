import React from "react";
import {View, Image, Dimensions, TouchableOpacity, PermissionsAndroid, AsyncStorage} from 'react-native'
import ResponsiveText from "../../../components/ResponsiveText";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Color from "../../../constants/color";
import Register from "../../Authentication/Register";

const {width} = Dimensions.get('window');

export default class HomeItem extends React.Component {
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity
        onPress={()=>this.props.onItemPress(item)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          borderBottomWidth: 1,
          borderColor: Color.BorderColor,

        }}>
        <View style={{}}>
          <Image
            source={require("../../../../assets/images/lung.jpg")}
            style={{height: wp("20%"), width: wp("20%"),}}
          />
        </View>
        <View style={{flex: 1, marginLeft: 10}}>
          <ResponsiveText style={{fontSize: "4.5%", fontWeight: "400", color: Color.Primary}}>
            Patient Name:{" "}
            <ResponsiveText>
              {item.patientName}
            </ResponsiveText>
          </ResponsiveText>
          <ResponsiveText style={{color: Color.Primary}}>
            Result: {" "}
            <ResponsiveText>
              {item.result}
            </ResponsiveText>
          </ResponsiveText>
          <ResponsiveText style={{color: Color.Primary}}>
            Date Of Test: {" "}
            <ResponsiveText>
              {item.dateOfTest}

            </ResponsiveText>
          </ResponsiveText>
        </View>
        <View style={{}}>
          <Image
            source={require("../../../../assets/icons/right.png")}
            style={{height: wp("5%"), resizeMode: "contain"}}
          />
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = {};
