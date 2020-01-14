import * as React from 'react';
import {Image, View, Button, Text, StyleSheet } from 'react-native';
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
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Profile', style: {fontSize: 20, color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                />
              <Image style = {styles.image} source={require('../../img/doctor_profile.jpg')} resizeMode="contain"></Image>

              <Text style = {styles.textInput}>Doctor: nameOfDoctor</Text>
              <Text style = {styles.textInput}>Doctor Number: 12345678</Text>
              <Text style = {styles.textInput}>Patient Number: 39</Text>
              <Button
            title="Create New Patient"
            onPress={() => this.props.navigation.navigate('CreateNewPatient')}
          />

          <Button
            title="Edit Existing Patient"
            onPress={() => this.props.navigation.navigate('ListOfPatients')}
          />

          <Button
            title="View UICC Version"
            onPress={() => this.props.navigation.navigate('Result')}
          />
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      marginLeft: '5%',
      marginBottom: '2%',
    },
    image: {
      padding: 100,
      height: '30%',
      marginTop: '5%',
      marginBottom: '10%',
    },
  
    // background: {
    //   width: '100%',
    //   height: '100%',
    //   justifyContent: "center",
    //   alignItems: "center",
    // }
  });
  