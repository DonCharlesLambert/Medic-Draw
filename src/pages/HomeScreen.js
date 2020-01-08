
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, Alert, AsyncStorage } from 'react-native';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    // this.login = this.login.bind(this);
    this.state = {
      username: '',
      password: '',
    }
  }
    // state = {
    //         username: 'Username',
    //         password: 'Password'
    //       }

    componentDidMount() {
      this._loadInitialState().done();
    }

    _loadInitialState = async () => {
      var value = await AsyncStorage.getItem('user');
      if (value !== null) {
        this.props.navigate('Menu');
      }
    }

    static navigationOptions = {
    title: 'Home',
    };

    login = () => {
      alert(this.state.username);
      fetch("https://89.36.71.180: 3000/users", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          AsyncStorage.setItem('user', res.user);
          this.props.navigation.navigate('Menu');
        }
        else {
          alert(res.message);
        }

      })
      .done();
    }

    render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          {/* <ImageBackground style = {styles.background} source={require('./img/bg.gif')}> */}
          <Text style={{ color: "black", fontSize: 30 }}>MEDIC DRAW</Text>
  
          <Image style = {styles.login_image} source={require('../../img/blankprofile.jpg')} resizeMode="contain"></Image>
  
          <TextInput
            style={styles.input}
            placeholder= {"username"}
            autoCorrect={false}
            clearButtonMode="always"
            ref= "username"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            // secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder= {"password"}
            autoCorrect={false}
            clearButtonMode="always"
            ref= "password"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            password={true}
          />
          <Button
              title="Login"
              onPress= {this.login.bind(this)} // {() =>this.props.navigation.navigate('CreateAccount')}
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
