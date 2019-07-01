import React from "react";
import {View, Image, Dimensions, TouchableOpacity, PermissionsAndroid, AsyncStorage} from 'react-native'
import ResponsiveText from "../../../components/ResponsiveText";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Color from "../../../constants/color";
import Register from "../../Authentication/Register";
import {API_URL, IMAGE_URL} from "../../../configs/API";
import moment from "moment";

const {width} = Dimensions.get('window');

export default class HomeItem extends React.Component {
  getDate(date) {
    if (date) {
      let m = new moment(date);
      let formatted = m.format("LLL");
      return formatted;
    }
  }

  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.props.onItemPress(item)}
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
            source={{uri: `${IMAGE_URL + item.image.url}`}}
            style={{height: wp("20%"), width: wp("20%"),}}
          />
        </View>
        <View style={{flex: 1, marginLeft: 10}}>
          <ResponsiveText style={{fontSize: "4.5%", fontWeight: "400", color: Color.Primary}}>
            Patient Name:{" "}
            <ResponsiveText>
              {item.name}
            </ResponsiveText>
          </ResponsiveText>
          <ResponsiveText style={{color: Color.Primary}}>
            Result: {" "}
            <ResponsiveText>
              {item.class}
            </ResponsiveText>
          </ResponsiveText>
          <ResponsiveText style={{color: Color.Primary}}>
            Date Of Test: {" "}
            <ResponsiveText>
              {this.getDate(item.createdAt)}
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
