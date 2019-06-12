import React from 'react'
import {Dimensions, Modal, SafeAreaView, Platform, TouchableWithoutFeedback, View} from 'react-native'
const {width, height} = Dimensions.get('window')

export default class AppModal extends React.Component {
  render() {
    const {containerStyle,backgroundStyle}=this.props;
    return (
      <Modal
        transparent={true}
        visible={this.props.visible}
        onRequestClose={this.props.onRequestClose}>
        <SafeAreaView style={[styles.container,containerStyle]}>
          <TouchableWithoutFeedback         disabled={this.props.disabled}
                                            onPress={this.props.onRequestClose}>
            <View style={[styles.bg,backgroundStyle]}/>
          </TouchableWithoutFeedback>
          <View style={styles.content}>
            {this.props.children}
          </View>
        </SafeAreaView>
      </Modal>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
  },
  content: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 125 : 100,
    zIndex: 60
  }
}
