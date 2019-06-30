import React from "react";
import {Image, Dimensions, PermissionsAndroid, AsyncStorage} from 'react-native'
import Container from "../../components/Container";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {loadUserInState, loadUserTokenInState} from "../../actions/loadUserInState";
import {connect} from "react-redux";

const {width} = Dimensions.get('window');
export const STORAGE_USER = "USER";
export const STORAGE_TOKEN = "TOKEN";

class Splash extends React.Component {

  async componentWillMount(): void {
    const {navigate} = this.props.navigation;
    let user = await AsyncStorage.getItem(STORAGE_USER);
    let token = await AsyncStorage.getItem(STORAGE_TOKEN);
    if (!user) {
      navigate("Auth")
    } else {
      user = JSON.parse(user);
      token = JSON.parse(token);
      this.props.loadUserInState(user);
      this.props.loadUserTokenInState(token);
      navigate("MainStack");
    }
    //
    // setTimeout(() => {
    //   this.props.navigation.navigate("Login")
    // }, 500)
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


const mapStateToProps = state => {
  return {
    user: state.userAuth
  }
};
const mapDispatchToProps = dispatch => {
  return {
    loadUserInState: (user) => dispatch(loadUserInState(user)),
    loadUserTokenInState: (token) => dispatch(loadUserTokenInState(token)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

const styles = {
  logo: {
    width: wp("70%"),
    resizeMode: "contain"
  }
};
