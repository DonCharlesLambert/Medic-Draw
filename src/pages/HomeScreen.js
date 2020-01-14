
import * as React from 'react';
import { StyleSheet, ImageBackground, Text, View, TouchableOpacity, ScrollView, Image, Button, TextInput, Alert, AsyncStorage } from 'react-native';
import { Header } from 'react-native-elements';
import TouchableHighlight from "react-native-web/dist/exports/TouchableHighlight";

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
  }

  render() {
    return (
        <View>
          <Header centerComponent={{text: 'MEDIC DRAW', style: {top: 0, fontSize: 20, color: '#fff'}}}/>
          <ImageBackground source={require('../../img/background.jpg')} style={styles.container}>
            <Text style={{color: "black", fontSize: 20}}>WELCOME!</Text>
              <TextInput
                  style={styles.input}
                  placeholder={"username"}
                  autoCorrect={false}
                  clearButtonMode="always"
                  ref="username"
                  onChangeText={(username) => this.setState({username})}
                  value={this.state.username}
              />
              <TextInput
                  style={styles.input}
                  placeholder={"password"}
                  autoCorrect={false}
                  clearButtonMode="always"
                  ref="password"
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                  secureTextEntry={true}
              />
            <Button
                title="Login"
                onPress={this.login.bind(this)}
                // onPress={() =>this.props.navigation.navigate('Profile')}
            />
            <Button
                title="Do not have an account? Sign Up!"
                onPress={() => this.props.navigation.navigate('CreateAccount')}// {this.login} // {() =>this.props.navigation.navigate('CreateAccount')}
            />
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
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

  button: {
    width: '70%',
  }
});
