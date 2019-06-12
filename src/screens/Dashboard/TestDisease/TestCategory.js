import React from "react";
import {Text, View, FlatList, ImageBackground, Image, Dimensions, TouchableOpacity} from "react-native"
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import ResponsiveText from "../../../components/ResponsiveText";
import Register from "../../Authentication/Register";
import Color from "../../../constants/color";
import bg from "../../../../assets/images/lung.jpg"

const {width, height} = Dimensions.get("window");

export default class WalletItem extends React.Component {

  render() {
    const {icon, type, accuracy,image} = this.props.item;
    return (
      <TouchableOpacity style={styles.container} onPress={()=>this.props.onPress(this.props.item)}>
        <Image
          source={{uri:image}}
          style={{
            flex: 1,
            resizeMode: "cover",
            height: null,
            width: null,
            borderRadius: 10,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
        <View style={{
          flex: 1,
          resizeMode: "cover",
          height: null,
          width: null,
          borderRadius: 10,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor:"#000",
          opacity:0.7,
        }}/>
        <View style={styles.topIconView}>
          <ResponsiveText style={styles.bottomText}>
            {type}
          </ResponsiveText>
        </View>
        <View style={styles.bottomTextView}>

          <ResponsiveText style={{color:"#fff"}}>
           Modal Accuracy: {" "}
            <ResponsiveText style={{color:"#fff"}}>
              {
                accuracy
              }
            </ResponsiveText>
          </ResponsiveText>
        </View>

      </TouchableOpacity>
    );
  }
}
const styles = {
  container: {
    height: wp("35%"),
    width: wp("45%"),
    backgroundColor: "#fff",
    elevation: 3,
    padding: 10,
    borderColor: "#000",
    borderRadius: 10,
    justifyContent: "space-between",
    marginHorizontal: 7,
    marginVertical: 10,
    position: "relative",

  },
  topIconView: {},
  bottomTextView: {
    alignItems: "flex-end"
  },
  bottomText: {
    fontSize: "4.5%",
    color: Color.SecondaryText
  }

};
