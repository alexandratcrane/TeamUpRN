
// script is to open the react native debugging tools. keep above react/react native imports
<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";

const styles = StyleSheet.create({
    logo: {
        width: 400,

        resizeMode: 'contain',
        // height: 50,
        // display: "flex",
    },

    buttons: {
        flex: 1,
    },

});

const HomePage = () => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 2, backgroundColor: 'red', }}>

                <Image style={styles.logo} source={require("TeamUpRN/src/images/csgo.png")} />
            </View>
            <View style={{ flex: 1, }}></View>
            <View style={{ flex: 2, backgroundColor: 'purple', display: 'flex', flexDirection: 'row', }}>
                <Button title="Login" />
                <Button title="Sign Up" />
            </View>
        </View >


    );

};

export default HomePage;




