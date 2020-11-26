import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, Picker } from 'react-native';
//for the user back arrow icon this import below must be used
//if we can't use expo icons, maybe this: import Icon from 'react-native-ionicons'
//import for navigationOptions

//the edit information
const Edit = () => {
  const styles = StyleSheet.create({
  	image:
  	{
    	flex: 1,
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

	return (
  	<View style={{ flex: 1, backgroundColor: 'black', }}>
      	<View style={{ flex: 3, }}>
              <Image style={styles.image} source={require("TeamUpRN/src/images/profile.png")} />
            </View>
        	<View style={styles.informationContainer}>
          	<Text>Username:</Text>
              <Text>Rank:</Text>
              <Text>Region:</Text>
            </View>
        	<View style={styles.roleContainer}>
          	<Text style={[styles.text, { fontSize: 24 }]}>Roles: </Text>
              <Picker selectedValue={selectedValue}
                  style={{ height: 100, width: 200 }}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                  <Picker.Item label="Fragger" value="fragger"/>
                  <Picker.Item label="Support" value="support"/>
                  <Picker.Item label="Leader" value="leader"/>
                  <Picker.Item label="Awper" value="awper"/>
                  <Picker.Item label="Lurker" value="lurker"/>
              </Picker>
            </View>
 	</View>
	);
}
 export default Edit;
