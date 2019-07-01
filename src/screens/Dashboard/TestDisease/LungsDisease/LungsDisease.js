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
import FilePickerManager from 'react-native-file-picker';
import {ImageUpload} from "../../../../api/patient";
import {loginUserAction} from "../../../../actions/loginUserAction";
import {connect} from "react-redux";

const {width} = Dimensions.get('window');

class LungsDisease extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientName: "",
      patientAge: "",
      patientFile: null,
      loading: false
    }
  }

  onSelectFilePressed() {
    FilePickerManager.showFilePicker(null, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled file picker');
      } else if (response.error) {
        console.log('FilePickerManager Error: ', response.error);
      } else {
        let extension = response.fileName.split('.');
        if (extension[1] === 'dcm') {
          this.setState({patientFile: response});
        } else {
          alert("Not a dicom file.Please select a dicom file(.dcm)")
        }

      }
    });
  }

  onSendPressed() {
    const {patientName, patientAge, patientFile} = this.state;
    if (patientName === "") this.setState({errorMessage: "Please Enter Patient Name"});
    else if (patientAge === "") this.setState({errorMessage: "Please Enter Patient Age"});
    else if (patientFile == null) this.setState({errorMessage: "Please Select a file."});
    else {
      this.setState({loading: true});

      const {user, token} = this.props;
      let data = new FormData();
      let image = {
        uri: patientFile.uri,
        type: patientFile.type ? patientFile.type : "image/jpeg",
        name: patientFile.fileName,
      };
      data.append('user', user._id);
      data.append('name', patientName);
      data.append('age', patientAge);
      data.append('file', image);

      ImageUpload(data)
        .then(res => res.data)
        .then(res => {
          if (res.status === true) {
            this.setState({
              patientName: "",
              patientAge: "",
              patientFile: null,
            });
            alert("Test Has been submitted. You result will be ready in few minutes and showed on home screen.");
            this.props.navigation.navigate("Dashboard")
          }
        })
        .catch(err => console.warn(err))
        .done(() => {
          this.setState({
            loading: false
          })
        });

    }

  }

  getErrorMessage() {
    if (this.state.errorMessage) {
      return (
        <ResponsiveText style={{alignSelf: 'center', color: Color.Primary}}>
          {this.state.errorMessage}
        </ResponsiveText>
      );
    } else return <ResponsiveText style={{alignSelf: "center", color: 'transparent'}}>Hidden</ResponsiveText>;
  }

  render() {
    const {params} = this.props.navigation.state;
    let header = params && params.item ? params.item.type : "Disease Detection";
    const {patientFile} = this.state;
    return (
      <Container>
        <AppHeader
          left={Icons.Back({tintColor: "#fff", height: wp("5%")})}
          leftPress={() => this.props.navigation.goBack()}
          body={ItemText.Text({color: "#fff"}, `Lungs Disease`)}
        />
        <Content style={{}}>
          <Image
            source={require("../../../../../assets/images/lung.jpg")}
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
            <View style={{marginTop: 5}}>
              {
                this.getErrorMessage()
              }
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
                textStyle={{color: patientFile ? Color.SecondaryText : Color.PrimaryText}}
                color={patientFile ? false : ["#e2ebf0", "#dde6ec", "#d8e2e7", "#d4dde3", "#cfd9df"]}
                onPress={this.onSelectFilePressed.bind(this)}
                text={patientFile ? "File Selected" : "Select MRI Image(.dcm)"}
              />

            </View>
          </View>
        </Content>
        <Button
          loading={this.state.loading}
          gradientStyle={{width: wp("80%"), alignSelf: "center"}}
          onPress={this.onSendPressed.bind(this)}
          text={"Test Now!"}
        />
      </Container>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.userAuth.user,
    isFetching: state.userAuth.isFetching,
    token: state.userAuth.token,
    error: state.userAuth.error
  }
};

export default connect(mapStateToProps, {})(LungsDisease);
const styles = {
  logo: {
    alignSelf: "center",
    width: wp("50%"),
    resizeMode: "contain"
  }
};
