import React from "react";
import {Image, FlatList, Dimensions, PermissionsAndroid, AsyncStorage} from 'react-native'
import Container from "../../../components/Container";
import ItemText from "../../../constants/text";
import AppHeader from "../../../components/AppHeader";
import HomeItem from "./HomeItem";
import patientResults from "./patients";

const {width} = Dimensions.get('window');

export default class Home extends React.Component {
  onItemPressed(item) {
    this.props.navigation.navigate("ItemDetail", {item})
  }

  render() {

    return (
      <Container>
        <AppHeader
          body={ItemText.TestResults({color: "#fff"})}
        />
        <FlatList
          renderItem={({item, index}) =>
            <HomeItem
              item={item}
              key={index}
              onItemPress={this.onItemPressed.bind(this)}
            />
          }
          data={patientResults}
          keyExtractor={(item, index) => `${index}`}
          extraData={this.state}
        />
      </Container>
    );
  }
}


const styles = {};
