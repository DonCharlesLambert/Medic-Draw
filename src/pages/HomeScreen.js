
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, Alert, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
    state = {
            username: 'Username',
            password: 'Password'
          }

    static navigationOptions = {
    title: 'Home',
    };

    render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          {/* <ImageBackground style = {styles.background} source={require('./img/bg.gif')}> */}
          <Text style={{ color: "black", fontSize: 30 }}>MEDIC DRAW</Text>
  
          <Image style = {styles.login_image} source={require('../../img/blankprofile.jpg')} resizeMode="contain"></Image>
  
          <TextInput
            style={styles.input}
            placeholder= {this.state.username}
            autoCorrect={false}
            clearButtonMode="always"
            onChangeText={(text) => this.setState({ username: text })}
            password={true}
            // secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder= {this.state.password}
            autoCorrect={false}
            clearButtonMode="always"
            onChangeText={(text) => this.setState({ password: text })}
          />
          <Button
              title="Login"
              onPress={() => this.props.navigation.navigate('Menu')}
            />
          <Button
              title="Sign Up"
              onPress={() =>this.props.navigation.navigate('CreateAccount')}
          />
           
          {/* </ImageBackground> */}
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

  // background: {
  //   width: '100%',
  //   height: '100%',
  //   justifyContent: "center",
  //   alignItems: "center",
  // }
});
