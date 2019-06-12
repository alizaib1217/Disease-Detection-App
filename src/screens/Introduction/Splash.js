import React from "react";
import {Image, Dimensions, PermissionsAndroid, AsyncStorage} from 'react-native'
import Container from "../../components/Container";
import Color from "../../constants/color";
import ResponsiveText from "../../components/ResponsiveText";
import Content from "../../components/Content";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

const {width} = Dimensions.get('window');

export default class Splash extends React.Component {
  componentWillMount(): void {
    setTimeout(() => {
      this.props.navigation.navigate("Login")
    }, 500)
  }

  render() {
    return (
      <Container style={{justifyContent: "center", alignItems: "center"}}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.logo}
        />
      </Container>
    );
  }
}


const styles = {
  logo: {
    width: wp("70%"),
    resizeMode: "contain"
  }
};
