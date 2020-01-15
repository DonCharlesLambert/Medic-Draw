import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, ToastAndroid, Button, TextInput, Alert, TouchableOpacity, ActionSheetIOS } from 'react-native';

export default class AnotherScreen extends React.Component {

  static navigationOptions = {
    title: 'Create New Patient',
    headerStyle: {
      backgroundColor: '#75E6DA',
    },
  };

  constructor(props){
    super(props);
    this.state= {
        name:'',
        DOB:''
    }
  }

    render() {
      return (
          <View style={styles.container}>
                <TextInput
                style={styles.input}
                placeholder="Name"
                autoCorrect={false}
                clearButtonMode="always"
                onChangeText={(name)=>this.setState({name})}
                />

              <TextInput
                style={styles.input}
                placeholder="DOB"
                autoCorrect={false}
                clearButtonMode="always"
                onChangeText={(DOB)=>this.setState({DOB})}
              />

              <TextInput
              style={styles.input}
              // keyboardType="numeric"
              placeholder="Hospital Number"
              autoCorrect={false}
              clearButtonMode="always"
              />

              <TextInput
              style={styles.multinput}
              multiline={true}
              placeholder="Symptom"
              autoCorrect={false}
              clearButtonMode="always"
              />

            <TouchableOpacity
                style = {styles.button}
                onPress={() => this.props.navigation.navigate('WholeBody')}
            >
              <Text style = {styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#00e0db',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: '70%',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      marginBottom: '2.5%',
      borderRadius: 10,
      padding: 15
    },
    multinput: {
      height: 100,
      width: '70%',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      marginBottom: '2.5%',
      borderRadius: 10,
      padding: 15
    },
    button: {
      width: '30%',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      alignItems: 'center',
      margin: 5,
      marginTop: 15,
      borderRadius: 10,
    },
    buttonText: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 17,
    }
  })