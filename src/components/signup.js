// script is to open the react native debugging tools. keep above react/react native imports
<script src="http://localhost:8097"></script>
import React, { Component, useState } from 'react';
import { useAuth } from '../../providers/AuthProvider.js';
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

const Signup = () => {
	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");
	const [ steamId, setSteam ] = useState("");
	const [ rank, setRank ] = useState("");
	const [ role, setRole ] = useState("");
	const [ user, signUp, signIn ] = useAuth();
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
                        placeholder="email address" 
						onChangeText={(setEmail)} value={email} />
		    <TextInput style={styles.form}
                        placeholder="steam username" 
						onChangeText={(setSteam)} value={steamID} />
		    <TextInput style={styles.form}
                        placeholder="Password" 
						onChangeText={(text) => setPassword(text)} />
                    <TextInput style={styles.form}
                        placeholder="Rank" 
						onChangeText={(setRank)} value={rank} />
                    <TextInput style={styles.form}
                        placeholder="Role" 
						onChangeText={(setRole)} value={role} />   
                    </View>
                    <View style={styles.buttons}>
                        <Button color="#DE9B35" style={styles.buttons} title="Sign Up" onPress={() =>this.props.navigation.navigate('CSGoHome')}title="sign up"/>
                    </View>
                </View>
            </View>
            </>
        );
        
    }

export default Signup;
