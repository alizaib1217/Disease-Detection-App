import React from "react";
import {Image, Dimensions, View, PermissionsAndroid, AsyncStorage, FlatList} from 'react-native'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Container from "../../../../components/Container";
import AppHeader from "../../../../components/AppHeader";
import ItemText from "../../../../constants/text";
import Content from "../../../../components/Content";

const {width} = Dimensions.get('window');

export default class LungsDisease extends React.Component {
  render() {
    const {params} = this.props.navigation.state;
    let header = params && params.item ? params.item.type : "Disease Detection"
    return (
      <Container>
        <AppHeader
          body={ItemText.Text({color: "#fff"}, `Lungs Disease`)}
        />
        <Content>

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
