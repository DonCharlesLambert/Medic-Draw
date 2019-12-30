import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Alert, Button, Image, ImageBackground, StyleSheet, Text, TextInput, View} from "react-native";

class Login extends Component{
  state = {
    username: 'Username',
    password: 'Password'
  }

  render(){
    return (
        <View style={styles.container}>
          <ImageBackground style = {styles.background} source={require('./img/bg.gif')}>
            <Text style={{ color: "black", fontSize: 30 }}>
              MEDIC DRAW
            </Text>

            <Image style = {styles.login_image} source={require('./img/blankprofile.jpg')} resizeMode="contain"/>

            <TextInput
                style={styles.input}
                value= {this.state.username}
                onChangeText={(text) => this.setState({ username: text })}
            />
            <TextInput
                style={styles.input}
                value= {this.state.password}
                onChangeText={(text) => this.setState({ password: text })}
            />
            <Button
                title="Login"
                onPress={() => Alert.alert("Welcome " + this.state.username)}
            />
            <Button
                title="Sign Up"
                onPress={() => this.props.navigation.navigate('Main')}
            />

          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    width: '60%',
    borderColor: 'gray',
    borderRadius: 25,
    backgroundColor: '#c7bdc6',
    marginBottom: '2.5%',
    borderWidth: 1
  },

  login_image: {
    height: '20%',
    marginBottom: '2.5%',
  },

  background: {
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
  }
});


class Home extends Component{
  render(){
    return(
        <View>
          <Text>Wys bro</Text>
        </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Login,
    navigationOptions: () => ({
      title: 'Login',
    }),
  },
  Main: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home',
    }),
  }
});

export default createAppContainer(AppNavigator);