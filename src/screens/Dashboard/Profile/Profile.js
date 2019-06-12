import React from "react";
import {Image, FlatList, Dimensions, PermissionsAndroid, AsyncStorage} from 'react-native'
import Container from "../../../components/Container";
import ItemText from "../../../constants/text";
import AppHeader from "../../../components/AppHeader";
import Content from "../../../components/Content";
import Icons from "../../../constants/icon";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

const {width} = Dimensions.get('window');

export default class Profile extends React.Component {
  render() {

    return (
      <Container>
        <AppHeader
          body={ItemText.Profile({color: "#fff"})}
          right={Icons.Settings({tintColor: "#fff", height: wp("7%"), width: wp("7%")})}
          rightPress={() => null}
        />
        <Content>
          
        </Content>
      </Container>
    );
  }
}


const styles = {};
