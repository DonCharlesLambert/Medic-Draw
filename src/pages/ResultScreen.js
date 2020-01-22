import * as React from 'react';
import {StyleSheet, View, Button, Text, Image, Alert } from 'react-native';
import ModalDropdown from "react-native-modal-dropdown";


export default class ResultScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          UICCVersion: 'UICC Version 8',
          UICCOptions: ['UICC Version 8', 'UICC Version 7', 'UICC Version 6','UICC Version 5','UICC Version 4',],
      }
  }

  static navigationOptions = {
    title: 'Result',
    };

    Exported = () => {
        alert('Data has imported to your album! Thank You!');
        this.props.navigation.navigate('Profile');
    }

    render() {
        return (
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                <ModalDropdown
                    style = {styles.button}
                    onSelect = {this.state.UICCVersion}
                    options={this.state.UICCOptions}
                    defaultValue = {'Change Version: UICC Version 8'}
                    color = {'#bde0eb'}
                    onSelect = {(version) => this.setState({UICCVersion: (String(this.state.UICCOptions[version]))})}
                />
            </View>
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
  textInput: {
    marginLeft: '5%',
    marginTop: '2%',
    marginBottom: '2%',
  },
  textInputBold: {
    marginLeft: '5%',
    marginTop: '1%',
    marginBottom: '2%',
    fontWeight: 'bold',
    fontSize: 15.5
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    marginTop: '5%',
    marginBottom: '10%',
  },
  button: {
     width: '50%',
     backgroundColor: '#bde0eb',
     alignItems: 'center',
     justifyContent: "center",
     margin: 5,
     marginTop: 20,
     borderRadius: 10,
  },
});
