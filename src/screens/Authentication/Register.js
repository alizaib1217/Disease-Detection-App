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
import {loginUserAction} from "../../actions/loginUserAction";
import {connect} from "react-redux";
import {registerUserAction} from "../../actions/registerUserAction";

const {width} = Dimensions.get('window');

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    occupation: "",
    errorMessage: ""
  };


  onNameChange(name) {
    this.setState({name});
  }

  onEmailChange(email) {
    this.setState({email});
  }

  onPasswordChange(password) {
    this.setState({password});
  }

  onOccupationChange(occupation) {
    this.setState({occupation});
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
      this.props.registerUser({
        email,password,
      }, this.props.navigation);
    }
  }

  getErrorMessage() {
    if (this.state.errorMessage) {
      return (
        <ResponsiveText style={styles.errorMessage}>
          {this.state.errorMessage}
        </ResponsiveText>
      );
    } else return <ResponsiveText style={[styles.errorMessage, {color: 'transparent'}]}>Hidden</ResponsiveText>;
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
                leftIcon={Icons.Profile({width: 18, resizeMode: 'contain'})}
                keyboardType={'default'}
                placeholder="Enter Your Name"
                value={this.state.name}
                onChangeText={this.onNameChange.bind(this)}
              />
              <InputField
                leftIcon={Icons.Email({width: 18, resizeMode: 'contain'})}
                keyboardType={'default'}
                placeholder="Enter Your Email"
                value={this.state.email}
                onChangeText={this.onEmailChange.bind(this)}
              />
              <InputField
                secureTextEntry
                leftIcon={Icons.Password({width: 18, resizeMode: 'contain'})}
                keyboardType={'default'}
                placeholder="Enter your Password"
                value={this.state.password}
                onChangeText={this.onPasswordChange.bind(this)}
              />

              <InputField
                leftIcon={Icons.Occupation({width: 18, resizeMode: 'contain'})}
                keyboardType={'default'}
                placeholder="Enter Your Occupation"
                value={this.state.occupation}
                onChangeText={this.onOccupationChange.bind(this)}
              />
              <ResponsiveText
                style={styles.termsText} size={"2.5%"}>
                By Signing up, you are agree to our Terms & Privacy Policy
              </ResponsiveText>
              <Button
                onPress={() => this.props.navigation.navigate("Dashboard")}
                text={"Register"}
              />
            </View>
            <View style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingVertical: 10

            }}>
              <ResponsiveText>
                Already have account?{" "}
              </ResponsiveText>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")} style={{}}>
                <ResponsiveText style={{color: Color.Primary,}}>
                  Login
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
    user: state.userAuth
  }
};
const mapDispatchToProps = dispatch => {
  return {
    registerUser: (body, navigation) => dispatch(registerUserAction(body, navigation)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
const styles = {
  content: {
    flex: 1,
    padding: 0
  },
  topArea: {
    flex: 1,
    justifyContent: "space-between",
    // padding: 20,
  },
  bottomArea: {
    flex: 1,
  },
  errorMessage: {
    marginVertical: 5,
    alignSelf: 'center',
  },
  authRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  authText: {
    color: "#000",
    fontSize: "6%",
    fontWeight: "500"
  },
  logoContainer: {
    // flex: 1,
    alignSelf: 'center'
  },
  logo: {
    // height: wp("20%"),
    width: wp("50%"),
    resizeMode: "contain"
  },
  fieldsContainer: {
    flex: 1,
    // backgroundColor:"red",
    width: width * 0.7,
    alignSelf: 'center'
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
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  dividerText: {
    fontSize: "3.5%",
    color: Color.PrimaryText,
    marginHorizontal: 15
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.5)"
  },
  socialMediaIconsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    flex: 1
  },
  socialMediaIcon: {
    height: wp("20%"),
    width: wp("20%")
  }

}
