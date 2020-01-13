
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, Alert, AsyncStorage } from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    // this.login = this.login.bind(this);
    this.state = {
      username: '',
      password: '',
    }
  }

    componentDidMount() {
      this._loadInitialState().done();
    }

    _loadInitialState = async () => {
      var value = await AsyncStorage.getItem('users');
      if (value !== null) {
        this.props.navigate('Menu');
      }
    }

    static navigationOptions = {
      headerShown: false
      };

    login = () => {
      if (this.state.username === '') {
        Alert.alert('Username cannot be empty!');
        return;
      }

      if (this.state.password === '') {
        Alert.alert('Password cannot be empty!');
        return;
      }

      this.props.navigation.navigate('Profile');

      // fetch('http://facebook.github.io/react-native/movies.json')
      // .then((response) => response.json())
      // .then((responseJson) => {
      //   alert("s")
      //   return responseJson.movies;
      // })
      // .catch((error) => {
      //   console.error(error);
      // });

      // alert(this.state.username);

      // fetch('http://127.0.0.1:3000/users', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     username: this.state.username,
      //     password: this.state.password,
      //   })
      // })   
      // .then((response) => response.json()) 
      // .then((res) => {   
      //   alert(res.message)     
      //   if (res.success === true) {
      //     AsyncStorage.setItem('user', res.user);
      //     this.props.navigation.navigate('Menu');
      //   }
      //   else {
      //     alert(res.message);
      //   }
      // })
      // .catch((err) => {
      //   console.error(err);
      // })
      // .done();
    }

    render() {
    return (
      <ScrollView style={{flex: 1}}>
        <Header centerComponent={{ text: 'MEDICAL DRAW', style: { fontSize: 20, color: '#fff' } }} />
        <View style={styles.container}>
          <Text style={{ color: "black", fontSize: 20 }}>WELCOME!</Text>  
          <TextInput
            style={styles.input}
            placeholder= {"username"}
            autoCorrect={false}
            clearButtonMode="always"
            ref= "username"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
          <TextInput
            style={styles.input}
            placeholder= {"password"}
            autoCorrect={false}
            clearButtonMode="always"
            ref= "password"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry = {true}
          />
          <Button
              title="Login"
              onPress= {this.login.bind(this)} 
              // onPress={() =>this.props.navigation.navigate('Profile')}
            />
          <Button
              title="Do not have an account? Sign Up!"
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
  // background: {
  //   width: '100%',
  //   height: '100%',
  //   justifyContent: "center",
  //   alignItems: "center",
  // }
});
