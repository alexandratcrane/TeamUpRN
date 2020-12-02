<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Picker, TextInput, Alert } from 'react-native';

const { user } = useAuth();
const [profile, createProfile] = useState();
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
        fontFamily: "sans-serif",
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
    input:
    {
      borderColor: "#ffd700",
      borderWidth: 1,
      backgroundColor: "#686868",
    },
    rolePick:
    {
      height: 150,
      width: "80%",
      color: "#ffd700",
      justifyContent: 'center',
      backgroundColor: "#686868",
    },
  });

//the edit information
class Edit extends React.Component {

  async updateProfile () {
    try {
      await user.functions.createProfile(this.state.steamID, this.state.rank, this.state.role);
      setProfile(profile);
    } catch (err) {
      Alert.alert("An error occurred while updating profile.");
    }
  };
  

  state = {
      steamID: '',
      rank: '',
      role: ''
   }
   handleUsername = (text) => {
      this.setState({ steamID: text })
   }
   handleRank = (text) => {
      this.setState({ Rank: text })
   }
   updateRole = (role) => {
      this.setState({ role: role })
   }

   

render(){

    return (

      <View style={{ flex: 1, backgroundColor: 'black', }}>
        	   <View style={styles.imageCont}>
                <Image style={styles.image} source={require("TeamUpRN/src/images/profile.png")} />
              </View>

              <View style={styles.informationContainer}>
                    <TextInput style = {styles.input}
                      onChangeText={this.handleRank}
                      placeholder="Rank"
                      placeholderTextColor = "#ffffff"
                    />
                    <Picker style={styles.rolePick} selectedValue = {this.state.role} onValueChange = {this.updateRole}>
                          <Picker.Item label="Fragger" value="fragger"/>
                          <Picker.Item label="Support" value="support"/>
                          <Picker.Item label="Leader" value="leader"/>
                          <Picker.Item label="Awper" value="awper"/>
                          <Picker.Item label="Lurker" value="lurker"/>
                    </Picker>
                      <Text>{this.state.role}</Text>
              </View>


            <View style={styles.buttonCont}>
                <View style={styles.buttons}>
                    <Button title="Done" color="#DE9835" onPress={() =>this.props.navigation.navigate('Profile')}/>
                    <Button title="Save" color="#DE9835" onPress={updateProfile}/>
                </View>
            </View>
      	</View>
    );
    }
   }
 export default Edit;
