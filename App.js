/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// script is to open the react native debugging tools. keep above react/react native imports

{/* <script src="http://localhost:8097"></script> */ }
// import 'react-native-gesture-handler';
import React, { Component } from 'react';
import HomePage from './src/components/HomePage.js';
import CSGoHome from './src/components/CSGoHome.js';
import Profile from './src/components/profile.js';
import Edit from './src/components/edit.js';
import Queue from './src/components/Queue.js';
import Signup from './src/components/signup.js';
import Login from './src/components/login.js';
import AuthProvider from './providers/AuthProvider.js'
import PlayerProvider from './providers/PlayerProvider.js'

//npm install @react-navigation/native@5.7.3
// npm install @react-navigation/stack@5.9.0 @react-native-community/masked-view@0.1.10 react-native-screens@2.10.1 react-native-safe-area-context@3.1.4 react-native-gesture-handler@1.7.0

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//https://www.digitalocean.com/community/tutorials/react-react-native-navigation
const Stack = createStackNavigator();


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// needs to be a component to hold components
class App extends Component {
  render() {
    return (


      <>
        {/* navigation stuff imported in */}
        {/* <NavigationContainer> */}
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="CSGoHome" component={CSGoHome} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Edit" component={Edit} />
                <Stack.Screen name="Queue" component={Queue} />
            </Stack.Navigator>
        </NavigationContainer>


        {/* <SafeAreaView> */}

        {/* <Stack.Navigator> */}
        {/* <Stack.Screen
            name="HomePage"
            component={HomePage}>

          </Stack.Screen>
          <Stack.Screen name="CSGo" component={CSGoHome}>

          </Stack.Screen> */}
        {/* </Stack.Navigator> */}
        {/* </SafeAreaView>*/}
        {/*</NavigationContainer> */}
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
