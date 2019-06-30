import React, {Component} from 'react';
import {YellowBox} from "react-native"
import AppContainer from "./src/routers";
import {Provider} from "react-redux";
import configureStore from "./src/configs/configureStore";

const store = configureStore();


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}
YellowBox.ignoreWarnings(['Warning: Async Storage']);

console.disableYellowBox = false;
