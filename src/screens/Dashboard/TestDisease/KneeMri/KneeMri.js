import React from "react";
import {Image, Dimensions, View, PermissionsAndroid, AsyncStorage, FlatList} from 'react-native'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Container from "../../../../components/Container";
import AppHeader from "../../../../components/AppHeader";
import ItemText from "../../../../constants/text";
import Content from "../../../../components/Content";
import Icons from "../../../../constants/icon";
import InputField from "../../../../components/InputField";
import ResponsiveText from "../../../../components/ResponsiveText";
import Color from "../../../../constants/color";
import Button from "../../../../components/Button";

const {width} = Dimensions.get('window');

export default class KneeMri extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientName: "",
      patientAge: "",

    }
  }

  onSendPressed() {
    this.props.navigation.navigate("Dashboard")
  }

  render() {
    const {params} = this.props.navigation.state;
    let header = params && params.item ? params.item.type : "Disease Detection"
    return (
      <Container>
        <AppHeader
          left={Icons.Back({tintColor: "#fff", height: wp("5%")})}
          leftPress={() => this.props.navigation.goBack()}
          body={ItemText.Text({color: "#fff"}, `Knee Mri`)}
        />
        <Content style={{}}>
          <Image
            source={require("../../../../../assets/images/kneeMri.jpg")}
            style={{
              height: wp("50%"),
              width: wp("100%"),
              resizeMode: "cover"
            }}
          />
          <View style={{padding: 10}}>
            <ResponsiveText style={{color: Color.Placeholder, textAlign: "center",}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </ResponsiveText>
            <View>

              <InputField
                keyboardType={'default'}
                placeholder="Enter Patient Name"
                value={this.state.patientName}
                onChangeText={(patientName) => this.setState({patientName})}
              />
              <InputField
                keyboardType={'number-pad'}
                placeholder="Enter Patient Age"
                value={this.state.patientAge}
                onChangeText={(patientAge) => this.setState({patientAge})}
              />
              <Button
                textStyle={{color:Color.PrimaryText}}
                color={["#e2ebf0","#dde6ec","#d8e2e7","#d4dde3","#cfd9df"]}
                // onPress={this.onSendPressed.bind(this)}
                text={"Select MRI Image(.pck)"}
              />

            </View>
          </View>
        </Content>
        <Button
          gradientStyle={{width: wp("80%"), alignSelf: "center"}}
          onPress={this.onSendPressed.bind(this)}
          text={"Test Now!"}
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
