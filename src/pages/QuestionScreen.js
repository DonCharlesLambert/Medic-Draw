import * as React from 'react';
import {StyleSheet, Alert, View, Button, Text, TextInput, TouchableOpacity} from 'react-native';
import CheckBtn from '../CustomedComponent/CheckBtn';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class drawingScreen extends React.Component {

  static navigationOptions = {
    title: 'Questions',
    };

    render() {
        return (
          <KeyboardAwareScrollView keyboardShouldPersistTaps="never" contentContainerStyle={styles.container}>
              <View style={styles.theBox}>
                  <Text style={{fontWeight: 'bold', marginBottom: 10, color: '#f2f3f4'}}>Size of the tumour</Text>
                  <CheckBtn
                      label='1 - 2cm'
                      onCheckChange={() => console.log('Tumour size is 1-2cm')}
                  />
                  <CheckBtn
                      label='3 - 4cm'
                      onCheckChange={() => console.log('Tumour size is 3-4cm')}
                  />
              </View>

              <View style={styles.theBox}>
                  <Text style={{fontWeight: 'bold', marginBottom: 10, color: '#f2f3f4'}}>Is vocal chord mobile?</Text>
                  <CheckBtn
                      label='Yes'
                      onCheckChange={() => console.log('Vocal Chord is mobile')}
                  />
                  <CheckBtn
                      label='No'
                      onCheckChange={() => console.log('Vocal Chord is not mobile')}
                  />
              </View>

              <TextInput
                 style={styles.multiLine}
                 placeholder="Comments"
                 multiline={true}/>
              <TouchableOpacity
                style = {styles.button}
                onPress={() => this.props.navigation.navigate('Drawing')}
              >
                <Text style = {styles.buttonText}>Create Another Drawing</Text>
              </TouchableOpacity>              

              <TouchableOpacity
                style = {styles.button}
                onPress={() => this.props.navigation.navigate('Result')}
              >
                <Text style = {styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              </KeyboardAwareScrollView>
          );
    }
}

const styles = StyleSheet.create({
    input: {
      height: 80,
      borderColor: 'gray',
    },
    multiLine: {
        height: 100,
        width: '70%',
        backgroundColor: '#add8e6',
        marginTop: 50,
        borderRadius: 20,
        padding: 15,
        left: "13%"
    },
    theBox: {
        backgroundColor: '#add8e6',
        alignItems: 'center',
        borderRadius: 20,
        width: '70%',
        marginTop: 50,
        marginBottom: 50,
        left: "13%"
    },
    button: {
        width: '50%',
        backgroundColor: '#cee8f0',
        alignItems: 'center',
        marginTop: 50,
        borderRadius: 10,
        left: "25%"
    }
  });