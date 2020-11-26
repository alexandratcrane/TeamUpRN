import 'react-native-gesture-handler';
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
    // css style for divs that change buttons size/where it is. react native is confusing
    buttons: {
        // flex: 1,
        padding: 5,
        minHeight: 15,

    },

});

const HomePage = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black', }}>
            <View style={{ flex: 3, }}>

                <Image style={styles.logo} source={require("TeamUpRN/src/images/csgo.png")} />
            </View>
            <View style={{ flex: 1, }}></View>
            <View style={{ flex: 3, display: 'flex', }}>
                <View style={styles.buttons}>
                    <Button color="#DE9B35" style={{ width: 500, height: 200, }} title="Login" />
                </View>
                <View style={styles.buttons}>
                    <Button color="#DE9B35" style={styles.buttons} title="Sign Up" />
                </View>
            </View>
        </View >


    );

};

export default HomePage;




