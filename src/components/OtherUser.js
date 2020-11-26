import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";

const styles = StyleSheet.create({
    mainDiv: { height: 100, width: 350, backgroundColor: 'blue', borderRadius: 10, flexDirection: 'row', },
    userTxt: { color: 'white', },
    profileDiv: { flex: 1, },
    profile: { resizeMode: 'contain', width: 100, height: 100, },
    infoDiv: { flex: 1, width: 100, },
    activeDiv: { flex: 1, width: 100, },
});
// each other user will be in the queue page 
const OtherUser = () => {
    return (
        // enclosing div 
        <View style={styles.mainDiv}>
            {/* no source for img yet because it should be based on data */}
            <View style={styles.profileDiv}>
                <Image style={styles.profile} source={require('TeamUpRN/src/images/profile.png')} alt="profPic" /></View>
            <View style={styles.infoDiv}>
                <Text style={styles.userTxt}>Username:</Text>
                <Text style={styles.userTxt}>Rank:</Text>
            </View>
            <View style={styles.activeDiv}>
                <Text style={styles.userTxt}>Active</Text>

            </View>
        </View>

    );
};

export default OtherUser;