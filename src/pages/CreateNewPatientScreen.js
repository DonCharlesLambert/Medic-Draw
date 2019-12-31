import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, Alert, TouchableOpacity } from 'react-native';

export default class AnotherScreen extends React.Component {

  static navigationOptions = {
    title: 'Create New Patient',
    };
    
    render() {
      return (
        <ScrollView style={{flex: 1}}>
          <View style={styles.container}>
              <Text>Name</Text>

              <TextInput
              style={styles.input}
              placeholder="Name"
              ></TextInput>

            <Text>DOB</Text>
            <TextInput
              style={styles.input}
              placeholder="DOB"
            ></TextInput>

              <Text>Hosptical Number</Text>
              <TextInput
              style={styles.input}
              // keyboardType="numeric"
              placeholder="Hosptical Number"
              ></TextInput>

              <Text>Symptom</Text>
              <TextInput
              style={ 
              {height: 100, 
              width: '60%',
              borderColor: 'gray',
              marginBottom: '2.5%',
              borderWidth: 1}}
              multiline={true}
              placeholder="Symptom"
              ></TextInput>

              <Button
                title="Submit"
                onPress={() => this.props.navigation.navigate('WholeBody')}
              ></Button>
          </View>
        </ScrollView>

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
    input: {
      height: 40,
      width: '60%',
      borderColor: 'gray',
      marginBottom: '2.5%',
      borderWidth: 1
    },
  })