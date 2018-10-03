import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { withNavigation } from 'react-navigation';

class LoginView extends Component {
  render(){
    return (
    <View>
        <Text>这是登陆界面</Text>
        <View>
          <Button style={styles.button} onPress={this.onPressLearnMore} title="登陆" color="green"/>
          <Button style={styles.button} onPress={this.onPressLearnMore} title="注册" color="yellow"/>
        </View>
        
        <Text onPress={() => { this.props.navigation.navigate('Index',{ name :'hahah'}) }}>导航到主界面</Text>
    </View>
    )
  }
  onPressLearnMore(){
    console.log('onPressLearnMore')
  }
}
const styles = StyleSheet.create({
  button: {
    padding: '3px 5px',
    margin:'10px'
  }
});

export default withNavigation(LoginView)