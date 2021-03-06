import React from "react";
import {Image, View, FlatList, Dimensions, PermissionsAndroid, AsyncStorage} from 'react-native'
import Container from "../../../components/Container";
import ItemText from "../../../constants/text";
import AppHeader from "../../../components/AppHeader";
import Content from "../../../components/Content";
import Icons from "../../../constants/icon";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import ResponsiveText from "../../../components/ResponsiveText";
import Fonts from "../../../constants/fonts";
import Color from "../../../constants/color";
import {connect} from "react-redux";
import {getPatientResults} from "../../../api/patient";

const {width} = Dimensions.get('window');

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      noOfTest:0,
    }
  }

  componentWillMount(): void {
    this.getResultList();

    this.interval = setInterval(() => {
      this.getResultList()

    }, 5000)
  }

  componentWillUnmount(): void {
    clearInterval(this.interval)
  }

  getResultList() {
    let {user} = this.props;
    getPatientResults(user._id)
      .then(res => res.data)
      .then(res => {
        if (res.status) {
          this.setState({
            noOfTest: res.data.test.length
          });
        }
      })
      .catch(err => console.warn(err))
      .done(() => {
        this.setState({
          loading: false
        })
      })
  }
  render() {
    const {user} = this.props;
    return (
      <Container>
        <AppHeader
          body={ItemText.Profile({color: "#fff"})}
          right={Icons.Settings({tintColor: "#fff", height: wp("7%"), width: wp("7%")})}
          rightPress={() => this.props.navigation.navigate("Settings")}
        />

        <Content style={{padding: 10,}}>

          <View style={{justifyContent: "center", alignItems: "center"}}>
            <Image
              source={require("../../../../assets/images/profile.jpg")}
              style={{height: wp("30%"), width: wp("30%"), borderRadius: wp("30%")}}
            />
            <ResponsiveText style={{marginTop: 5, fontSize: "5%", fontFamily: Fonts.CrimsonTextSemiBold}}>
              {user.name}
            </ResponsiveText>
            <ResponsiveText style={{color: Color.Placeholder}}>
              {user.email}
            </ResponsiveText>
          </View>
          <View style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
              <ResponsiveText style={{fontFamily: Fonts.CrimsonTextSemiBold}}>
                Occupation
              </ResponsiveText>
              <ResponsiveText style={{color: Color.Primary}}>
                {user.occupation}
              </ResponsiveText>
            </View>
            <View style={{justifyContent: "center", alignItems: "center"}}>
              <ResponsiveText style={{fontFamily: Fonts.CrimsonTextSemiBold}}>
                No Of Test Taken
              </ResponsiveText>
              <ResponsiveText style={{color: Color.Primary}}>
                {this.state.noOfTest}
              </ResponsiveText>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <ResponsiveText style={{fontFamily: Fonts.CrimsonTextSemiBold}}>
              About Me
            </ResponsiveText>
            <ResponsiveText style={{color: Color.Placeholder, textAlign: "justify",}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </ResponsiveText>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userAuth.user
  }
};
const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = {};
