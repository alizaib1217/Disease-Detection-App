import React from "react";
import {Image, Dimensions, View, PermissionsAndroid, AsyncStorage, FlatList} from 'react-native'
import Container from "../../../components/Container";
import ItemText from "../../../constants/text";
import AppHeader from "../../../components/AppHeader";
import Content from "../../../components/Content";
import SettingsItem from "../Profile/Settings/SettingsItem";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import TestCategory from "./TestCategory";
import categories from "./categoriesList";

const {width} = Dimensions.get('window');

export default class TestDisease extends React.Component {

  onTypeClicked(item) {
    switch (item.id) {
      case 0:
        this.props.navigation.navigate("LungsDisease", {item});
        break;
      case 1:
        this.props.navigation.navigate("DiabeticRetinopathy", {item});
        break;
      case 2:
        this.props.navigation.navigate("KneeMri", {item});
        break;
      default:
        break;
    }

  }

  render() {
    return (
      <Container>
        <AppHeader
          body={ItemText.AddTest({color: "#fff"})}
        />
        <Content>
          <Image
            source={require("../../../../assets/images/logo.png")}
            style={styles.logo}
          />
          <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <FlatList
              numColumns={2}
              renderItem={({item, index}) => <TestCategory item={item} onPress={this.onTypeClicked.bind(this)}/>}
              data={categories}
              keyExtractor={(item, index) => `${index}`}
              extraData={this.state}
            />
          </View>
        </Content>
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
