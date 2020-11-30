// script is to open the react native debugging tools. keep above react/react native imports
<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TextInput } from "react-native";
import TeamUpSVG from 'TeamUpRN/src/images/TeamUp_Logo.svg';

const styles = StyleSheet.create({
    // css style for divs that change buttons size/where it is. react native is confusing
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

class Login extends React.Component {
    render(){
        return(
        <>
            <View style={{ flex: 1, backgroundColor: 'black', }}>
                <View style={styles.container}>
                    <TeamUpSVG width={300} height={350}/>
                </View>
                <View style={{ flex: 3, }} style={styles.container}>
                    <View>
                        <Text style={styles.text}>Login</Text>
                    </View>
                    <View style={styles.container}>
                    <TextInput style={styles.form}
                        placeholder="steam username" />
                    <TextInput style={styles.form}
                        secureTextEntry={true}
                        placeholder="password"/>
                    </View>
                    <View style={styles.buttons}>
                        <Button color="#DE9B35" style={styles.buttons} title="Login" onPress={() =>this.props.navigation.navigate('CSGoHome')}title="login"/>
                    </View>
                </View>
            </View>
            </>
        );
        }
}

export default Login;
