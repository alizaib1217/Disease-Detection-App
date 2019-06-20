import React from "react";
import {Image, FlatList, View, Dimensions, PermissionsAndroid, AsyncStorage} from 'react-native'
import Container from "../../../components/Container";
import ItemText from "../../../constants/text";
import AppHeader from "../../../components/AppHeader";
import Icons from "../../../constants/icon";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import ResponsiveText from "../../../components/ResponsiveText";
import Color from "../../../constants/color";
import Fonts from "../../../constants/fonts";
import Register from "../../Authentication/Register";
import Button from "../../../components/Button";
import Content from "../../../components/Content";
import Share from 'react-native-share';

const {width} = Dimensions.get('window');

export default class ItemDetail extends React.Component {
  onShare() {
    const {params} = this.props.navigation.state;
    let item = {
      patientName: "Robert Downey",
      result: "1(Yes)",
      dateOfTest: "12 May, 2019"
    };
    if (params && params.item) {
      item = params.item
    }
    const name = item.patientName;
    const result = item.result;
    Share.open({
      title: 'Disease Detection',
      message: `Check out the result of ${name} test with the result ${result}.`,
      // url: '...'
    })
      .then((res) => {
      })
      .catch((err) => {
        err && console.warn(err);
      });
  }

  render() {
    const {params} = this.props.navigation.state;
    let item = {
      patientName: "Robert Downey",
      result: "1(Yes)",
      dateOfTest: "12 May, 2019"
    };
    if (params && params.item) {
      item = params.item
    }
    return (
      <Container>
        <Content>
          <AppHeader
            left={Icons.Back({tintColor: "#fff", height: wp("5%")})}
            leftPress={() => this.props.navigation.goBack()}
            body={ItemText.Text({color: "#fff"}, `${item.patientName}`)}
          />
          <View>
            <Image
              source={require("../../../../assets/images/lungs2.jpg")}
              style={{
                height: wp("50%"),
                width: "100%",
                resizeMode: "contain"
              }}
            />
          </View>
          <View style={{padding: 10}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
              <ResponsiveText style={{fontSize: "4.5%", color: Color.Primary, fontFamily: Fonts.CrimsonTextSemiBold}}>
                {
                  item.patientName
                }
              </ResponsiveText>
              <ResponsiveText style={{color: Color.Placeholder}}>
                {
                  item.dateOfTest
                }
              </ResponsiveText>
            </View>
            <View style={{marginTop: 5}}>
              <ResponsiveText style={{fontSize: "4.5%", fontFamily: Fonts.CrimsonTextSemiBold}}>
                Result(1)
              </ResponsiveText>
              <ResponsiveText style={{textAlign: "justify"}}>
                Cancer has been found in the test. Probability of patient having cancer is 0.5.
              </ResponsiveText>
            </View>
            <View style={{marginTop: 5}}>
              <ResponsiveText style={{fontSize: "4.5%", fontFamily: Fonts.CrimsonTextSemiBold}}>
                Description
              </ResponsiveText>
              <ResponsiveText style={{textAlign: "justify"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </ResponsiveText>
            </View>
          </View>
        </Content>
        <Button
          onPress={this.onShare.bind(this)}
          gradientStyle={{width: wp("80%"),alignSelf:"center"}}
          text={"Share Test"}
        />
      </Container>
    );
  }
}


const styles = {};
