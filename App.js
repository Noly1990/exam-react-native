/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements'
import {createMaterialTopTabNavigator,createStackNavigator} from 'react-navigation'
import IndexView from './pages/Index'
import LoginView from './pages/Login'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


let RootStack = createStackNavigator(
  {
    Index: IndexView,
    Login: LoginView,
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}


// type Props = {};
// export default class App extends Component<Props> {
//   export default class App extends Component {
//   render() {
//     return (
//       <View>
//         <Header
//           leftComponent={{ icon: 'menu', color: '#fff' }}
//           centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
//           rightComponent={{ icon: 'home', color: '#fff' }}
//         />
//         <View style={styles.container}>
//           <Text style={styles.welcome}>This!!!!!!!!!!!!!!!un new react native!</Text>
//           <Text style={styles.welcome}>Welcome to React Native!</Text>
//           <Text style={styles.instructions}>To get started, edit App.js</Text>
//           <Text style={styles.instructions}>{instructions}</Text>
//         </View>
//       </View>
      
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
