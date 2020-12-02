import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";


const styles = StyleSheet.create({
    mainDiv: { height: 100, width: 400, backgroundColor: '#C4C4C4', borderRadius: 10, flexDirection: 'row', alignItems: 'center', padding: 2, marginBottom: 4 },
    profileDiv: { flex: 1, marginLeft: 6, },
    profile: { resizeMode: 'contain', width: 70, height: 70, borderRadius: 100, },
    infoDiv: { flex: 2, width: 100, },
    activeDiv: {
        flex: 1, width: 100, alignItems: 'center',
    },
    activeTxt: { color: 'green', fontSize: 16, },
});


// each other user will be in the queue page 
const OtherUser = (props) => {
    return (
        // enclosing div 
        <View style={styles.mainDiv}>
            {/* no source for img yet because it should be based on data */}
            <View style={styles.profileDiv}>
                <Image style={styles.profile} source={require('TeamUpRN/src/images/profile.png')} alt="profPic" /></View>
            <View style={styles.infoDiv}>
                <Text id="username" style={{ fontSize: 18, color: 'black', }}>Username: {props.name}</Text>
                <Text id="rank" style={{ fontSize: 14, color: 'black', }}>Rank: {props.rank}</Text>
            </View>
            <View style={styles.activeDiv}>
                <Text style={styles.activeTxt}>Active</Text>

            </View>
        </View>

    );
};

export default OtherUser;