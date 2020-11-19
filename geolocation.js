//this should probably go into App.js
//Gabriella's attempt at geolocation
import React, { Component } from 'react';
import { Platform, TouchableNativeFeedback, Text, StyleSheet, View } from "react-native";

export default class Geolocation extends Component
{
  state =
  {
    location: null,
  };
  findCords = () =>
  {
    navigator.geolocation.getCurrentPosition (
      position =>
      {
        const locate = JSON.stringify(position);
        this.setState({locate});
      }
    );
  };
  render()
  {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={this.findCords}>
            <Text style={styles.locates}>Get your Location</Text>
            <Text>Your Location: {this.state.locate}</Text>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000"
  },
  locates:
  {
    fontSize: 24,
    textAlign: "center"
  }
});
