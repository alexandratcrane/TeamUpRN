import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



const Profile = () =>
{
  const styles = StyleSheet.create({
  	image:
  	{
    	width: 150,
    	height: 150,
    	borderRadius: 50,
        overflow:"hidden",
  	},
      informationContainer:
  	{
        alignItems:"center",
    	alignSelf: "center",
    	marginTop:15,
    	fontFamily: "sans-serif",
    	color: "#ffd700",
    	flex: 1,
  	},
  });
	return
	(
  	<View style={{ flex: 1, backgroundColor: 'black', }}>
      	<View style={{ flex: 3, }}>
              <Image style={styles.image} source={require("TeamUpRN/src/images/profile.png")} />
            </View>
        	<View style={styles.informationContainer}>
              <Text>Username:</Text>
              <Text>Rank:</Text>
              <Text>Region:</Text>
              <Text>Roles:</Text>
            </View>
    	</View>
  	);
  }
 export default Profile;
