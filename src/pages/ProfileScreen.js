import * as React from 'react';
import {Image, View, Button, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';


export default class ProfileScreen extends React.Component {

  static navigationOptions = {
    headerShown: false
    };

    Exported = () => {
        this.props.navigation.navigate('Patients');
    }

    render() {
        return (
            <View>
              <Header
                containerStyle={{
                   backgroundColor: '#75E6DA',
                   justifyContent: 'space-around',
                }}
                // leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Profile', style: {fontSize: 20, color: '#fff' } }}
                // rightComponent={{ icon: 'home', color: '#fff' }}
                />

              <ImageBackground style={styles.container}>
                  <View style={styles.profile}>
                      <Image style = {styles.image} source={require('../../img/profile.png')} resizeMode="contain"/>
                      <View style = {{height: 80, marginTop: 25}}>
                          <Text style = {styles.text}>Doctor : nameOfDoctor</Text>
                          <Text style = {styles.text}>Doctor Number : 12345678</Text>
                          <Text style = {styles.text}>Patient Number: 39</Text>
                      </View>
                  </View>
                  <View styles = {{width: '100%', backgroundColor: 'red'}}>
                      <TouchableOpacity
                          style = {styles.button}
                          onPress={() => this.props.navigation.navigate('CreateNewPatient')}
                      >
                          <Text style = {styles.buttonText}>Create New Patient</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style = {styles.button}
                          onPress={() => this.props.navigation.navigate('UICCVersionView')}
                      >
                          <Text style = {styles.buttonText}>View UICC Version</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style = {styles.button}
                          onPress={() => this.props.navigation.navigate('ListOfPatients')}
                      >
                          <Text style = {styles.buttonText}>Edit Existing Patients</Text>
                      </TouchableOpacity>
                  </View>
              </ImageBackground>
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#00e0db',
      height: '100%',
      alignItems: 'center',
    },
    profile:{
        paddingRight: 30,
        flexDirection:'row',
        marginTop: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 30,
        width: '95%',
        height: 110,
        alignItems: 'stretch',
    },
    text: {
      marginLeft: -40,
      marginBottom: '2%',
    },
    image: {
        marginLeft: -40,
        marginTop: 5,
        height: 100,
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        alignItems: 'center',
        margin: 5,
        marginTop: 15,
        borderRadius: 15,
    },
    buttonText: {
        color: 'rgba(10, 10, 10, 0.7)',
        fontSize: 20,
        marginTop: 10,
    }
  });
  