import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";
import OtherUser from './OtherUser.js';


const styles = StyleSheet.create({
    mainDiv: { backgroundColor: 'black', color: 'white', flex: 1, },
    img: { flex: 1, },
});


class Queue extends React.Component {
    render() {
        return (
            // enclosing div 
            <View style={styles.mainDiv} >
                {/* image for the logo */}
                <View>
                    <Image source={require("TeamUpRN/src/images/csgo.png")} />
                </View>
                {/* maybe somebody can put data for each otheruser and another other user pops up for whoever is avail? */}
                < OtherUser />

            </View >

        );
    }

}
export default Queue;
