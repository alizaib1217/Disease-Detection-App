import React, {Component} from 'react';
import AppContainer from "./src/routers";


export default class App extends Component {

  render() {
    return (
      <AppContainer/>
    );
  }
}

console.disableYellowBox = false;
