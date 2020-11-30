<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
        logo: {
            width: 400,
            resizeMode: 'contain',
            // height: 50,
            // display: "flex",
        },
        buttons: { width: 300, marginTop: 10, },

    });

class CSGoHome extends React.Component {
    render(){
        return (
        <>
            <View style={{ flex: 1, backgroundColor: 'black', }}>
                <View style={{
                    flex: 1, borderTopColor: "#DE9B35", borderBottomColor: "#DE9B35", borderWidth: 4, justifyContent: 'center',
                }}>
                    <Image style={styles.logo} source={require("TeamUpRN/src/images/csgo.png")} />
                </View>
                <View style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

                    <View style={styles.buttons}>
                        <Button title="Find Players" color="#DE9835" onPress={() =>this.props.navigation.navigate('Queue')}/>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Profile" color="#DE9835" onPress={() =>this.props.navigation.navigate('Profile')}/>
                    </View>
                    {/* <TouchableOpacity style={{ height: 100, flex: 1, backgroundColor: 'red' , }}><Text>My buttons</Text></TouchableOpacity> */}

                </View>
                <View style={{ alignItems: 'center', }}>
                    <View style={styles.buttons}>
                        <Button title="Sign Out" color="#DE9835" onPress={() =>this.props.navigation.navigate('Home')} />
                    </View>

                </View>
            </View>
         </>

        );
    }

}

export default CSGoHome;