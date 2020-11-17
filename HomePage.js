import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo: {
        // width: 50,
        // height: 50,
        display: "flex",
    },
});

const HomePage = () => {
    return (
        <View style={{ backgroundColor: 'black', }}>

            <Image style={styles.logo} source={require("TeamUpRN/src/images/csgo.png")} />
        </View >

    );

};

export default HomePage;




