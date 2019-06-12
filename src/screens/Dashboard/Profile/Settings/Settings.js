import React from "react";
import {Image, FlatList, Dimensions, PermissionsAndroid, AsyncStorage, View} from 'react-native'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Container from "../../../../components/Container";
import AppHeader from "../../../../components/AppHeader";
import Content from "../../../../components/Content";
import ItemText from "../../../../constants/text";
import Button from "../../../../components/Button";
import SettingsItem from "./SettingsItem";

const {width} = Dimensions.get('window');

export default class Settings extends React.Component {
  render() {

    return (
      <Container>
        <AppHeader
          body={ItemText.Settings({color: "#fff"})}
        />
        <Content>
          <Image
            source={require("../../../../../assets/images/logo.png")}
            style={styles.logo}
          />
          <SettingsItem text={"Terms & Services"} onPress={() => null}/>
          <SettingsItem text={"Privacy Policy"} onPress={() => null}/>
        </Content>
        <Button
          onPress={() => this.props.navigation.navigate("Auth")}
          gradientStyle={{width: wp("80%"),}}
          text={"Logout"}
        />
      </Container>
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
