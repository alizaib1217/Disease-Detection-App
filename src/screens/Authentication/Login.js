import React from "react";
import {TouchableOpacity, Dimensions, View, Image} from "react-native"
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import bg from "../../../assets/images/background.png";
import Color from "../../constants/color";
import ResponsiveText from "../../components/ResponsiveText";
import Container from "../../components/Container";
import InputField from "../../components/InputField";
import Icons from "../../constants/icon";
import Button from "../../components/Button";
import {loadUserInState, loadUserTokenInState} from "../../actions/loadUserInState";
import {connect} from "react-redux";
import {loginUserAction} from "../../actions/loginUserAction";

const {width} = Dimensions.get('window');

class Login extends React.Component {
  state = {
    email: "saad12150@gmail.com",
    password: "saadmasood",
    errorMessage: ""
  };

  onEmailChange(email) {
    this.setState({email});
  }

  onPasswordChange(password) {
    this.setState({password});
  }

  onForgotPasswordPress() {
    this.props.navigation.navigate("ForgotPassword")
  }

  onSignInPress() {
    let validateEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const {email, password} = this.state;
    if (email === "") this.setState({errorMessage: "Please enter email first"});
    else if (!validateEmail.test(email)) this.setState({errorMessage: "Please enter a valid email address"});
    else if (password === "") this.setState({errorMessage: "Please enter your password"});
    else {
      let body = {email, password};
      this.props.loginUser(body, this.props.navigation)
      // this.props.navigation.navigate("Dashboard");

    }
  }

  onSignUpPress() {
    this.props.navigation.navigate("Register")
  }

  getErrorMessage() {
    const {error} = this.props;
    if (this.state.errorMessage) {
      return (
        <ResponsiveText style={styles.errorMessage}>
          {this.state.errorMessage}
        </ResponsiveText>
      );
    } else if (error) return (
      <ResponsiveText style={styles.errorMessage}>
        Email or Password is Incorrect
      </ResponsiveText>);
    else return <ResponsiveText style={[styles.errorMessage, {color: 'transparent'}]}>Hidden</ResponsiveText>;
  }

  render() {
    return (
      <Container>
        <View style={styles.content}>
          <View style={styles.topArea}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../../../assets/images/logo.png")}
                style={styles.logo}
              />
            </View>
            <View style={styles.fieldsContainer}>
              {
                this.getErrorMessage()
              }
              <InputField
                leftIcon={Icons.Email({width: 18, tintColor: "#bfbfbf", resizeMode: 'contain'})}
                keyboardType={'default'}
                placeholder="Enter your email"
                value={this.state.email}
                onChangeText={this.onEmailChange.bind(this)}
              />
              <InputField
                secureTextEntry
                leftIcon={Icons.Password({width: 18, tintColor: "#bfbfbf", resizeMode: 'contain'})}
                keyboardType={'default'}
                placeholder="Enter your Password"
                value={this.state.password}
                onChangeText={this.onPasswordChange.bind(this)}
              />
              <ResponsiveText
                style={styles.termsText} size={"2.5%"}>
                By Signing in, you are agree to our Terms & Privacy Policy
              </ResponsiveText>
              <TouchableOpacity style={styles.forgotPasswordContainer} onPress={this.onForgotPasswordPress.bind(this)}>
                <ResponsiveText
                  style={styles.forgotPasswordText} size={"2.5%"}
                >
                  Can't Login?
                </ResponsiveText>
              </TouchableOpacity>
              <Button
                loading={this.props.isFetching}
                onPress={this.onSignInPress.bind(this)}
                text={"Login"}
              />
            </View>
            <View style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingVertical: 10
            }}>
              <ResponsiveText>
                Don't Have account?{" "}
              </ResponsiveText>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")} style={{}}>
                <ResponsiveText style={{color: Color.Primary,}}>
                  Register
                </ResponsiveText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.userAuth.user,
    isFetching: state.userAuth.isFetching,
    error: state.userAuth.error
  }
};
const mapDispatchToProps = dispatch => {
  return {
    loginUser: (body, navigation) => dispatch(loginUserAction(body, navigation)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
const styles = {
  content: {
    flex: 1,
    padding: 0
  },
  topArea: {
    flex: 1,
    justifyContent: "space-between",
  },
  logoContainer: {
    alignSelf: 'center'
  },
  logo: {
    // height: wp("20%"),
    width: wp("50%"),
    resizeMode: "contain"
  },
  fieldsContainer: {
    flex: 1,
    width: width * 0.7,
    alignSelf: 'center'
  },
  errorMessage: {
    marginVertical: 5,
    alignSelf: 'center',
    color:Color.Primary

  },

  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  termsText: {
    fontSize: "3.5%",
    color: "#787878",
    textDecorationLine: "underline",
    marginHorizontal: wp("5%")
  },
  forgotPasswordText: {
    fontSize: "3.5%",
    alignSelf: "flex-end",
    color: "#000",
    textDecorationLine: "underline"
  },

}
