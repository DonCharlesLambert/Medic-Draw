import * as React from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Text, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';

export default class CreateAccountScreen extends React.Component {
    state = {
        username: '',
        password: '',
        confirmPassword: ''
      }

    static navigationOptions = {
        headerShown: false,
        };

    CreateAccount = () => {
      if (this.state.username === '') {
        Alert.alert('Username cannot be empty!');
        return;
      }
  
      if (this.state.password === '') {
        Alert.alert('Password cannot be empty!');
        return;
      }

      if (this.state.comfirmPassword === '') {
        Alert.alert('Password cannot be empty!');
        return;
      }

      if (this.state.password !== this.state.confirmPassword) {
        Alert.alert('Password does not match!');
        return;
      }
      
      Alert.alert('Account has created successfully!');
      this.props.navigation.navigate('Home');
    }
      
        
    render() {
      return (
        <ScrollView style={{flex: 1}}>
            <Header centerComponent={{ text: 'MEDICAL DRAW', style: { fontSize: 30, color: '#fff' } }} />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 300 }}>
            <Text style={{ color: "black", fontSize: 20 }}>Create Account</Text>

            <TextInput
                style={styles.input}
                placeholder= {'Username'}
                autoCorrect={false}
                clearButtonMode="always"
                onChangeText={(username) => this.setState({username})}
            />
            <TextInput
                style={styles.input}
                placeholder= {'Password'}
                secureTextEntry = {true}
                autoCorrect={false}
              clearButtonMode="always"
                onChangeText={(password) => this.setState({password})}
                
            />
            <TextInput
                style={styles.input}
                placeholder= {'Confirm Password'}
                secureTextEntry = {true}
                autoCorrect={false}
                clearButtonMode="always"
                onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                

            />
            <Button
                title="Submit"
                onPress= {this.CreateAccount.bind(this)} 
                />
            <Button
                title="Already have an account? Log in!"
                onPress= {() =>this.props.navigation.navigate('Home')} 
                />
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
  
    login_image: {
      height: '20%',
      marginBottom: '2.5%',
    },
  });

  