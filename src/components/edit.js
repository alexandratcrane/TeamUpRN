import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, Picker } from 'react-native';
//for the user back arrow icon this import below must be used
import { Ionicons } from '@expo/vector-icons'
//if we can't use expo icons, maybe this: import Icon from 'react-native-ionicons'
//import for navigationOptions
import { createStackNavigator, createAppContainer } from 'react-navigation';
//this part probably goes in App.js
class EditPage extends React.Component
{
  static navigationOptions =
  {
    title: "Edit",
    headerStyle:
    {
      backgroundColor: "#808080",
    },
    headerTitleSytle:
    {
      fontWeight: "bold",
    },
  };
  render()
  {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Button
            title="Go back your profile page"
            onPress={() => this.props.navigation.push('Profile')}
        />
      </View>

    );
  }
}

const AppNavigator = createStackNavigator (
    {
        Profile: ProfilePage,
        Edit: EditPage
    },
    {
        initialRouteName: "Home"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component
{
    render()
    {
        return <AppContainer />;
    }
}

//the edit information
const Edit = () => {
    const [selectedValue, setSelectedValue] = useState("lurker");
    return (
         <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.topBar}>
              <Ionicons name="ios-arrow-back" size={20} color="#808080"></Ionicons>
              <Text>Profile</Text>
            </View>

            <View style={styles.profileImage}>
              <Image source={require('./src/images/profile.png')} style={styles.image} resizeMode="center"></Image>
            </View>

            <View style={styles.informationContainer}>
              <Text style={[styles.text, { fontSize: 40 }]}>Username: </Text>
              <Text style={[styles.text, { fontSize: 24 }]}>Rank: </Text>
              <Text style={[styles.text, { fontSize: 24 }]}>Region: </Text>
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
       </ScrollView>
     </SafeAreaView>
      );
    );
   }
 export default Edit

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor:"#000000"
    },
    text:
    {
      fontFamily: "sans-serif",
      color: "#ffd700"
    },
    image:
    {
      flex: 1
    },
    topBar:
    {
      flexDirection: "row",
      marginTop:30,
      marginHorizontal:15
    },
    profileImage:
    {
      width: 150px,
      height: 150px,
      borderRadius: 50%,
      overflow:"hidden"
    },
    informationContainer:
    {
      alignItems:"center",
      alignSelf: "center",
      marginTop:15
    },
    container:
    {
    flex: 1,
    paddingTop: 60,
    alignItems: "center"
   }
});
