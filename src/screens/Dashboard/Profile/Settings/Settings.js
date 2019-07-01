import React from "react";
import {Image, FlatList, Dimensions, PermissionsAndroid, AsyncStorage, View} from 'react-native'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Container from "../../../../components/Container";
import AppHeader from "../../../../components/AppHeader";
import Content from "../../../../components/Content";
import ItemText from "../../../../constants/text";
import Button from "../../../../components/Button";
import SettingsItem from "./SettingsItem";
import Icons from "../../../../constants/icon";

const {width} = Dimensions.get('window');

export default class Settings extends React.Component {
  render() {

    return (
      <Container>
        <AppHeader
          left={Icons.Back({tintColor: "#fff", height: wp("5%")})}
          leftPress={() => this.props.navigation.goBack()}
          body={ItemText.Settings({color: "#fff"})}
        />
        <Content>
          <Image
            source={require("../../../../../assets/images/logo.png")}
            style={styles.logo}
          />
          <SettingsItem text={"Terms & Services"} onPress={() => this.props.navigation.navigate("TermsAndServices")}/>
          <SettingsItem text={"Privacy Policy"} onPress={() => this.props.navigation.navigate("PrivacyPolicy")}/>
          {/*<SettingsItem text={"Edit Profile"} onPress={() => null}/>*/}
        </Content>
        <Button
          onPress={() => {
            AsyncStorage.clear();

            this.props.navigation.navigate("Auth")
          }}
          gradientStyle={{width: wp("80%"),alignSelf:"center"}}
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
