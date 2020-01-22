
import * as React from 'react';
import { StyleSheet, ImageBackground, Text, View, TouchableOpacity, Dimensions, Image, Button, TextInput, Alert, AsyncStorage } from 'react-native';
import { Header } from 'react-native-elements';
import TouchableHighlight from "react-native-web/dist/exports/TouchableHighlight";

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

  // _loadInitialState = async () => {
  //   var value = await AsyncStorage.getItem('users');
  //   if (value !== null) {
  //     this.props.navigate('Menu');
  //   }
  // }

  static navigationOptions = {
    headerShown: false
  };

  login = () => {
    // Alert.alert('Welcome ' + this.state.username);
    this.props.navigation.navigate('Profile');
  }

  render() {
    return (
        <View>
          <Header
              containerStyle={{
                backgroundColor: '#bde0eb',
                justifyContent: 'space-around',
              }}
              centerComponent={{text: 'Medical Draw', style: {top: 0, fontWeight: "bold", fontSize: 20, color: '#034fa1'}}}
          />
        <TouchableOpacity onPress={ this.login}>
            <Image style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}} source={require('../../img/welcome_page.png')} />
          </TouchableOpacity>
          <Text style={styles.text}>Welcome to Medical Drawing</Text>

          
          {/* <ImageBackground style={styles.container}> */}
            {/* <TouchableHighlight onPress={() => this.moveToAddNewCustomer()}> */}
              {/* <Image */}
                  {/* style={{width: 500, height: 1000}}
                  source={require('../../img/blankprofile.png')}
              /> */}
              {/* <TextInput
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
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                style = {styles.button}
                onPress={this.login.bind(this)}
            >
              <Text style = {styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {styles.button}
                onPress={() => this.props.navigation.navigate('CreateAccount')}
            >
              <Text style = {styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            </View> */}
          {/* </ImageBackground> */}

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f3f4',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    height: 40,
    width: '70%',
    backgroundColor: '#add8e6',
    marginBottom: '2.5%',
    borderRadius: 10,
    padding: 15
  },

  button: {
    width: '30%',
    backgroundColor: '#cee8f0',
    alignItems: 'center',
    margin: 5,
    marginTop: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: '#034fa1',
    fontSize: 17,
  }
});
