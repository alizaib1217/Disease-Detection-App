import React from "react";
import {Image, FlatList, Dimensions, View, PermissionsAndroid, AsyncStorage} from 'react-native'
import Container from "../../../components/Container";
import ItemText from "../../../constants/text";
import AppHeader from "../../../components/AppHeader";
import HomeItem from "./HomeItem";
import patientResults from "./patients";
import {connect} from "react-redux";
import {getPatientResults} from "../../../api/patient";
import ResponsiveText from "../../../components/ResponsiveText";

const {width} = Dimensions.get('window');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientResults: [],
      loading: false
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
    this.setState({
      loading: true
    });
    getPatientResults(user._id)
      .then(res => res.data)
      .then(res => {
        if (res.status) {
          this.setState({
            patientResults: res.data.test
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

  onItemPressed(item) {
    this.props.navigation.navigate("ItemDetail", {item})
  }

  render() {
    const {patientResults} = this.state;
    return (
      <Container>
        <AppHeader
          body={ItemText.TestResults({color: "#fff"})}
        />

        {
          patientResults.length > 0 &&

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
          ||
          <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ResponsiveText>
              No Result submission has been found
            </ResponsiveText>
          </View>
        }

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

export default connect(mapStateToProps, {})(Home);

const styles = {};
