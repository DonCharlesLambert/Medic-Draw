import * as React from 'react';
import { StyleSheet, View, TextInput, Button, Text, ScrollView } from 'react-native';

export default class CreateAccountScreen extends React.Component {
    state = {
        username: 'Username',
        password: 'Password'
      }

    static navigationOptions = {
        title: 'Create Account',
        };
        
    render() {
      return (
        <ScrollView style={{flex: 1}}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 300 }}>
            <Text style={{ color: "black", fontSize: 30 }}>Create Account</Text>

            <TextInput
                style={styles.input}
                placeholder= {this.state.username}
                onChangeText={(text) => this.setState({ username: text })}
                password={true}
            />
            <TextInput
                style={styles.input}
                placeholder= {this.state.password}
                // onChangeText={(text) => this.setState({ password: text })}
            />
            <TextInput
                style={styles.input}
                placeholder= {'Confirm Password'}
                // onChangeText={(text) => this.setState({ password: text })}
            />
            <Button
                title="Submit"
                onPress={() => this.props.navigation.navigate('Home')}
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

  