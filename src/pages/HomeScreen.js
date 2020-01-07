
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, Form, AsyncStorage } from 'react-native';
import { response } from 'express';

export default class HomeScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      }
    }
    
    // componentDidMount() {
    //   this._loadInitialState().done();
    // }

    // state = {
    //         username: 'Username',
    //         password: 'Password'
    //       }

    // constructor() {
    //   super();
    //   this.state = { user: {} };
    //   this.onSubmit = this.handleSubmit.bind(this);
    // }
    // handleSubmit(e) {
    //   e.preventDefault();
    //   var self = this;
    //   // On submit of the form, send a POST request with the data to the server.
    //   fetch('http://localhost:5000', { 
    //       method: 'POST',
    //       data: {
    //         Username: self.refs.Username,
    //         Password: self.refs.Password
    //       }
    //     })
    //     .then(function(response) {
    //       //this is the line that is giving me the error
    //       return response.json()
    //     }).then(function(body) {
    //       console.log(body);
    //     });
    //   }

    static navigationOptions = {
    title: 'Home',
    };

    render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={{ color: "black", fontSize: 30 }}>MEDIC DRAW</Text>

          <Image style = {styles.login_image} source={require('../../img/blankprofile.jpg')} resizeMode="contain"></Image>
  
          <TextInput
            style={styles.input}
            placeholder= 'username'
            autoCorrect={false}
            clearButtonMode="always"
            ref="Username"
            onChangeText={username => this.setState({username})}
            value={this.state.username}
            // secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder= "password"
            autoCorrect={false}
            clearButtonMode="always"
            ref="Password"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
            password={true}
          />
          <Button
              title="Login"
              onPress={() => this.props.navigation.navigate('Menu')}
            />
          <Button
              title="Sign Up"
              onPress= {() =>this.props.navigation.navigate('CreateAccount')}// {this.login} // {() =>this.props.navigation.navigate('CreateAccount')}
          />
           
        </View>
      </ScrollView>
      );
    }

  //   login = () => {
  //     alert(this.state.username);
  //     fetch("https://89.36.71.180: 3000/users", {
  //       method: "POST",
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         username: this.state.username,
  //         password: this.state.password,
  //       })
  //     })
  //     .then((response) => response.json())
  //     .then((res) => {
  //       if (res.success === true) {
  //         AsyncStorage.setItem('user', res.user);
  //         this.props.navigation.navigate('Menu');
  //       }
  //       else {
  //         alert(res.message);
  //       }

  //     })
  //     .done();
  //   }
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
