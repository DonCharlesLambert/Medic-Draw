
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TextInput, AsyncStorage, Alert } from 'react-native';
import { Header } from 'react-native-elements';

export default class PatientDetailScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  static navigationOptions = {
    title: 'Patient Details',
    headerStyle: {
      backgroundColor: '#bde0eb', 
    },
  };

  render() {
    return (
        <View>
          <Text style={styles.text}>Details</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f3f4',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    height: 40,
    width: '70%',
    backgroundColor: '#add8e6',
    marginBottom: '2.5%',
    borderRadius: 10,
    padding: 15
  },

  button: {
    width: '30%',
    backgroundColor: '#cee8f0',
    alignItems: 'center',
    margin: 5,
    marginTop: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: '#034fa1',
    fontSize: 17,
  }
});
