// script is to open the react native debugging tools. keep above react/react native imports
<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import TeamUpSVG from 'TeamUpRN/src/images/TeamUp_Logo.svg';

const styles = StyleSheet.create({
    svg: {
        justifyContent: 'center',
        alignContent: 'flex-start',
    },

    buttons: {
        // flex: 1,
        padding: 25,
        borderRadius: 50,
        width: 150,
        fontSize: 50,
        minHeight: 15,
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    form: {
        marginTop: 20,
        width: 300,
        height: 45,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: 'white',
        color: 'black',
        fontSize: 18,
        minHeight: 30,
        minWidth: 50,
    },

    text: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',

    },
});

class Signup extends React.Component{
    render(){
        return(
        <>
            <View style={{ flex: 1, backgroundColor: 'black', }}>
                <View style={{ flex: 1,}} style={styles.container}>
                    <TeamUpSVG width={200} height={250}/>
                </View>
                <View style={{ flex: 3,}} style={styles.container}>
                    <View>
                        <Text style={styles.text}>Sign Up</Text>
                    </View>
                    <View style={styles.container}>
                    <TextInput style={styles.form}
                        placeholder="name" />
                    <TextInput style={styles.form}
                        placeholder="steam username" />
                    <TextInput style={styles.form}
                        placeholder="password"/>
                    <TextInput style={styles.form}
                        placeholder="repeat password" />    
                    </View>
                    <View style={styles.buttons}>
                        <Button color="#DE9B35" style={styles.buttons} title="Sign Up" onPress={() =>this.props.navigation.navigate('CSGoHome')}title="sign up"/>
                    </View>
                </View>
            </View>
            </>
        );
        }
    }

export default Signup;
