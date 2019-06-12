import React, {
    Component,
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    StatusBar,
    Platform,
} from 'react-native';

const CustomStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

class MyStatusBar extends Component {
    render() {
        return (
            <CustomStatusBar backgroundColor={this.props.backgroundColor} barStyle={this.props.barStyle} />
        );
    }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    appBar: {
        backgroundColor:'#79B45D',
        height: APPBAR_HEIGHT,
    },
    content: {
        flex: 1,
        backgroundColor: '#33373B',
    },
});

export default MyStatusBar;