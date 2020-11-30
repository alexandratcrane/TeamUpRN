<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Picker } from 'react-native';

//the edit information
const Edit = () => {
  const styles = StyleSheet.create({
    imageCont:
    {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    image:
    {
      width: 150,
      height: 150,
      borderRadius: 200,
      overflow:"hidden",
    },
    informationContainer:
    {
        flex: 1,
        marginTop: 10,
    },
    text:
    {
      fontFamily: "sans-serif",
      color: "#ffd700",
      textAlign: 'left',
      justifyContent: 'center',
    },
    buttonCont:
    {
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttons:
    {
      width: 100,
      marginTop: 10,
      marginBottom: 50,
    },
  });


    return (
      <View style={{ flex: 1, backgroundColor: 'black', }}>
        	   <View style={styles.imageCont}>
                <Image style={styles.image} source={require("TeamUpRN/src/images/profile.png")} />
              </View>
          	<View style={styles.informationContainer}>
                <Text style={[styles.text, { fontSize: 50 }]}>Username:</Text>
                <Text style={[styles.text, { fontSize: 40 }]}>Rank:</Text>
                <Text style={[styles.text, { fontSize: 40 }]}>Region:</Text>
                <Text style={[styles.text, { fontSize: 40 }]}>Roles:</Text>
              </View>
            <View style={styles.buttonCont}>
                <View style={styles.buttons}>
                    <Button title="Done" color="#DE9835" onPress={() =>this.props.navigation.navigate('Profile')}/>
                </View>
            </View>
      	</View>
    );
   }
 export default Edit;
