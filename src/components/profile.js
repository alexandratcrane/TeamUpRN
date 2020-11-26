import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button } from 'react-native';
//for the user back arrow icon this import below must be used

// ALEX: idk why but this isnt working so i took it out for now
// import 'react-native-ionicons';
//import for navigationOptions
// import { createStackNavigator, createAppContainer } from 'react-navigation';
//this part probably goes in App.js

// ALEX: you need either one component or one component function per file
// class Profile extends React.Component {
//   static navigationOptions =
//     {
//       title: "Profile",
//       headerStyle:
//       {
//         backgroundColor: "#808080",
//       },
//       headerTitleSytle:
//       {
//         fontWeight: "bold",
//       },
//     };
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Button
//           title="Edit Profile"
//           onPress={() => this.props.navigation.push('Edit')}
//         />
//       </View>

//     );
//   }
// }
// ALEX: taking the navigator out for now to fix it
// const AppNavigator = createStackNavigator(
//   {
//     Profile: ProfilePage,
//     Edit: EditPage
//   },
//   {
//     initialRouteName: "Home"
//   }
// );

// const AppContainer = createAppContainer(AppNavigator);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

// ALEX: styles needs to be above the export statement to work. export statement is always last
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: "#000000"
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
    marginTop: 30,
    marginHorizontal: 15
  },
  profileImage:
  {
    // ALEX: px doesn't work w react native styles
    width: 150,
    height: 150,
    borderRadius: 3,
    overflow: "hidden"
  },
  informationContainer:
  {
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15
  }
});

//the profile information
const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.topBar}>
          {/* ALEX: took it out bc ionicons isnt working rn. */}
          {/* <Ionicons name="ios-arrow-back" size={20} color="#808080"></Ionicons> */}
          <Text>Profile</Text>
        </View>

        <View style={styles.profileImage}>
          {/* ALEX: I realized that this works for image imports. Don't know why */}
          <Image source={require('TeamUpRN/src/images/profile.png')} style={styles.image} resizeMode="center"></Image>
        </View>

        <View style={styles.informationContainer}>
          <Text style={[styles.text, { fontSize: 40 }]}>Username: </Text>
          <Text style={[styles.text, { fontSize: 24 }]}>Rank: </Text>
          <Text style={[styles.text, { fontSize: 24 }]}>Region: </Text>
          <Text style={[styles.text, { fontSize: 24 }]}>Roles: </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;


