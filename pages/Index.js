import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { withNavigation } from 'react-navigation';

class IndexView extends Component {
  render(){
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>这是主界面</Text>
        <Text onPress={() => { this.props.navigation.goBack() }}>导航到主界面</Text>
    </View>
    )
  }
}


export default withNavigation(IndexView)