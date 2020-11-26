/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// script is to open the react native debugging tools. keep above react/react native imports

{/* <script src="http://localhost:8097"></script> */ }
import 'react-native-gesture-handler';
import React from 'react';
import HomePage from './src/components/HomePage.js';
import CSGoHome from './src/components/CSGoHome.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Profile from './src/components/profile.js';
import Edit from './src/components/edit.js';
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

const App = () => {
  return (


    <>
      {/* navigation stuff imported in */}
      <NavigationContainer><StatusBar barStyle="dark-content" />
        {/* <SafeAreaView> */}

        <Stack.Navigator>
          <Stack.Screen
            name="HomePage"
            component={HomePage}>

          </Stack.Screen>
          <Stack.Screen name="CSGo" component={CSGoHome}>

          </Stack.Screen>
        </Stack.Navigator>
        {/* </SafeAreaView> */}</NavigationContainer>
    </>
  );
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
